const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./Model/Routes/auth");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173",   // frontend ka URL
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

  app.use("/", authRoutes);  

app.get("/", (req, res) => {
  res.send("Welcome to E-commerce Backend 🚀");
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});