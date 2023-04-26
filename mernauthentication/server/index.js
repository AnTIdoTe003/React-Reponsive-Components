// imports
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");

// db connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connection established"))
  .catch((error) => console.log(error));

// initialize
const app = express();

// middleware
app.use("/", require("./routes/authRoutes"));
app.use(express.json())

// Port number
const PORT = 4000;
// listen on port
app.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`);
});
