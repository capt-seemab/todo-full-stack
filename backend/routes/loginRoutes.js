const express = require("express");
const router = express.Router();
const Signup = require("../models/Signup");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "todoApplication";

router.post(
  "/",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password can not be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await Signup.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ errors: "Please try to login with correct credentials" });
      }
      user.isActive = true;
      await user.save();
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      return res.json({
        email: user.email,
        id: user.id,
        isActive: user.isActive,
        isAdmin: user.isAdmin,
        authToken: authToken,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ errors: "Something went wrong" });
    }
  }
);

module.exports = router;
