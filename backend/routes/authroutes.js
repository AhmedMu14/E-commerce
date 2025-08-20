      const express = require("express");
      const jwt = require("jsonwebtoken");
      const bcrypt = require("bcryptjs");
      const User = require("../Model/User");

      const router = express.Router();

      // ✅ Let Mongoose middleware handle hashi

      // routes/auth.js
      router.post("/signup", async (req, res) => {
        const { firstName, lastName, email, password } = req.body;

        try {
          const userExists = await User.findOne({ email });
          if (userExists) {
            return res.status(400).json({ error: "User already exists" });
          }

          // const hashedPassword = await bcrypt.hash(password, 10);

          const newUser = new User({
            firstName,
            lastName,
            email,
            password,
          });

          await newUser.save();

          res.status(201).json({
            message: "Signup successful",
            user: {
              firstName: newUser.firstName,
              lastName: newUser.lastName,
              email: newUser.email,
            }
          });

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




      // logout ki api ha 

      router.post("/logout", (req, res) => {
        res.clearCookie("token", {
          httpOnly: true,
          sameSite: "Strict",
          secure: false,
        });    
        res.json({ message: "Logged out successfully" });
      });

      module.exports = router;
