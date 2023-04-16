const express = require("express");
const router = express.Router();
const Signup = require("../models/Signup");
const { body, validationResult } = require("express-validator");
const bcrypt= require("bcryptjs");
const jwt=require("jsonwebtoken");
const JWT_SECRET='todoApplication';

//create user
router.post(
  "/",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 character").isLength({
      min: 5,
    }),
    body("isAdmin", "Please specify the user role").isBoolean(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await Signup.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ errors: "Email already exist" });
      }
      const salt= await bcrypt.genSalt(10);
      const secPass=await bcrypt.hash(req.body.password,salt)
      user = await Signup.create({
        email: req.body.email,
        password: secPass,
        isAdmin: req.body.isAdmin,
      });
      const data={
        user:{
          id:user.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({authToken}); 
    } catch (error) {
      console.error(error.message);
      res.status(500).json({errors:"Something went wrong"});
    }
  }
);


//get all user
router.get("/getAllUser", async (req, res) => {
  try {
    const allUser=await Signup.find();
    res.json(allUser);
  } catch (error) {
    console.log(error);
    res.json({
      errors: "getting error to get the user list",
      message: error.message,
    });
  }
});

module.exports = router;
