const express = require("express");
const router = express.Router();
const todoList = require("../models/Todo");
const { body, validationResult } = require("express-validator");


// create toda data 

router.post(
  "/",
  [
    body("description", "Please enter atleast 1 character").isLength({
      min: 1,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const task = await todoList.create({
        email: req.body.email,
        description: req.body.description,
      });
      if (task) {
        const allTask = await todoList.find({ email: req.body.email });
        res.json(allTask);
      }
    } catch (error) {
      res.json({
        errors: "getting error to create the task",
        message: error.message,
      });
    }
  }
);

//getall todata 

router.post("/getUserTodo", async (req, res) => {
  try {
    const allTask = await todoList.find({ email: req.body.email });
    console.log("allTask", allTask);
    res.json(allTask);
  } catch (error) {
    console.log(error);
    res.json({
      errors: "getting error to get the todo list",
      message: error.message,
    });
  }
});


//delete the todo data

router.post("/delete", async (req, res) => {
  try {
    await todoList.findByIdAndDelete(req.body.id);

    const allTask = await todoList.find({ email: req.body.email });
    res.json(allTask);
  } catch (error) {
    console.log(error);
    res.json({
      errors: "getting error to get the todo list",
      message: error.message,
    });
  }
});



module.exports = router;
