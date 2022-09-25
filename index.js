const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth.js");
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

app.get("/users", (req, res) => {
  res.send("hello first request")
});

app.listen(8800, () => {
  connect();
  console.log("connected to backend");
});
