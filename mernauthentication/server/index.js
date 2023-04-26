// imports
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser");
// db connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connection established"))
  .catch((error) => console.log(error));

// initialize
const app = express();
// middleware

app.use(bodyParser.json())
app.use (cookieParser())
app.use(express.urlencoded({extended:false}));

app.use("/", require("./routes/authRoutes"));


// Port number
const PORT = 4000;
// listen on port
app.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`);
});
