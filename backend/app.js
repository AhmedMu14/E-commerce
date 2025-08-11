const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(express.json());

// ✅ CORS configuration
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true
}));

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// ✅ Routes
app.use("/", require("./routes/authroutes")); // <-- MOUNT HERE

// Test route
app.get("/", (req, res) => {
  res.send("Server chal raha hai bhai 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
