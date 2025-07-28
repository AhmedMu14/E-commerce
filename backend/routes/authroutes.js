const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../Model/User");

const router = express.Router();

// ✅ Let Mongoose middleware handle hashing
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ error: "User already exists" });

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "Signup successful", username: newUser.name });
  } catch (err) {
    console.error("❌ Signup Error:", err);
    res.status(500).json({ error: "Signup failed" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 60 * 60 * 1000,
    });

    // ✅ Send user details in response
    res.json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login failed" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Strict",
    secure: false,
  });
  res.json({ message: "Logged out successfully" });
});

module.exports = router;
