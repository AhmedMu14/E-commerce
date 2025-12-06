require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const redis = require("redis");
const usersRouter = require("./routes/users");
const cors = require("cors");

const app = express();
app.use(express.json());


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// MongoDB connection
mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
//   Ye new connection string parser enable karta hai useNewUrlParser: true,
  useUnifiedTopology: true, 
//   Ye new unified topology engine enable karta hai
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));



// Redis connection
const redisClient = redis.createClient({
  url: 'redis://127.0.0.1:6379',
//   port:
});
redisClient.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
  await redisClient.connect();
  console.log('Redis connected');
})();

// Make redis available in routes
app.use((req, res, next) => {
  req.redis = redisClient;
  next();
});

// Routes
app.use("/users", usersRouter);
  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 







































// Pagination Setup

// Client request me page aur optional limit send karta hai.

// Default: page = 1, limit = 10 ya aap jo set karoge (limit = 23 etc.).

// MongoDB query me skip aur limit use hota hai:

// skip = (page - 1) * limit
// limit = limit


// Cache Key Creation

// Har page aur limit combination ka unique Redis key banta hai:

// key = `users_page_${page}_limit_${limit}`


// Example:

// Page 1, limit 10 → users_page_1_limit_10

// Page 2, limit 10 → users_page_2_limit_10

// Page 1, limit 23 → users_page_1_limit_23

// Check Redis Cache

// req.redis?.get(key) → Redis se pehle check karega kya ye page ka data already cached hai.

// Agar cache mil jaye → direct client ko return karega, DB query skip hogi → fast response.

// Fetch from MongoDB (Cache Miss)

// Agar cache nahi mila → User.find().skip(...).limit(...) run hota hai

// Fetched data Redis me store hota hai:

// req.redis?.set(key, JSON.stringify(users), { EX: 300 }); // 5 min expiry


// Expiry (TTL)

// EX: 300 → 5 minutes ke baad cache automatically delete ho jayega

// Expired cache → next GET request MongoDB se fresh data fetch karega

// Smart Caching Behavior

// Har page + limit ka alag cache key → different queries overwrite nahi karenge ek dusre ko

// Pehle page ka cache safe rahega jab second page fetch ho raha ho