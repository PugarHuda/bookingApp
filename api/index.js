const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth.js");
const usersRoute = require("./routes/auth.js");
const hotelsRoute = require("./routes/auth.js");
const roomsRoute = require("./routes/auth.js");
const router = express.Router();
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

// app.get("/users", (req, res) => {
//   res.send("hello first request");
// });

// Middleware
// app.use("/api/auth", authRoute);
// app.use("/api/rooms", authRoute)
// app.use("/api/hotels", authRoute)
// app.use("/api/users", authRoute)

app.listen(8800, () => {
  connect();
  console.log("connected to backend");
});

module.exports = router;
