const express = require("express");
const router = express.Router();
const todoList = require("../models/Todo");
const { body, validationResult } = require("express-validator");

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
    todoList
      .create({
        email: req.body.email,
        description: req.body.description,
      })
      .then((todo) => res.json(todo))
      .catch((err) => {
        console.log(err);
        res.json({ error: "getting error to create the task", message: err.message });
      });
  }
);

module.exports = router;
