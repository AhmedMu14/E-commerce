const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// User model
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
  })
);

// POST /users
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    const keys = await req.redis.keys("users_page_*");
    for (const key of keys) await req.redis.del(key);
    res.status(201).json(user);
  } catch (err) {
    res
      .status(400)
      .json({ message: err.code === 11000 ? "Email exists" : err.message });
  }
});

// GET /users?page=1
router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const key = `users_page_${page}`;

  //   const total = await User.countDocuments();
  // console.log("Total users:", total);

  const cached = await req.redis?.get(key);
//   console.log(req.redis)
  if (cached) return res.json(JSON.parse(cached));

  const users = await User.find()
    .skip((page - 1) * 34)
    .limit(34);
    // console.log("Fetched users:", users.length);
  req.redis?.set(key, JSON.stringify(users), { EX: 50 });
//   ya time ape set kar saktay ho apni app ki liaz say 
  res.json(users);
});

module.exports = router;
