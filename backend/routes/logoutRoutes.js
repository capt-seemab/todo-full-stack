const express = require("express");
const router = express.Router();
const Signup = require("../models/Signup");
const { body, validationResult } = require("express-validator");

//logout the session
router.post(
  "/",
  [body("email", "Enter a valid email").isEmail()],
  async (req, res) => {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer" &&
      req.headers.authorization.split(" ")[1]?.length > 0
    ) {
      console.log("valid token");
    } else {
      return res.status(400).json({ errors: "Invalid auth token" });
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;
    try {
      let user = await Signup.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: "Please try to login with correct credentials" });
      }
      user.isActive = false;
      await user.save();
      return res.json({
        email: user.email,
        id: user.id,
        isActive: user.isActive,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ errors: "Something went wrong" });
    }
  }
);

module.exports = router;
