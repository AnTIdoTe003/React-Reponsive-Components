const express = require("express");
const app = express();
const cors = require("cors");
const { mongoose } = require("mongoose");
require("dotenv").config();
const UserModel = require("./models/user");

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);
// console.log(process.env.MONGO_URL)

app.get("/test", (req, res) => {
  res.json("test works");
});

app.post("/register", async (req, res) => {
  const {
    username,
    email,
    password,
    confirmPassword,
    department,
    year,
    semester,
    crush,
  } = req.body;
  try {
    const userInfo = await UserModel.create({
      username,
      email,
      password,
      confirmPassword,
      department,
      year,
      semester,
      crush,
    });
    res.json(userInfo);
  } catch (error) {
    res.status(400)
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
