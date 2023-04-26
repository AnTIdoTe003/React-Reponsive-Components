const userModel = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    console.log(req.body.name);
    // checks
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Password is not strong enough" });
    }
    if (confirmPassword != password) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existEmail = await userModel.findOne({ email });

    if (existEmail) {
      return res.status(400).send({ message: "Email already exists" });
    }
    const hashedPassword = await hashPassword(password);
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });
    return res
      .status(201)
      .json({ message: "User created successfully", created: true });
  } catch (error) {
    console.log(error.message);
  }
};

// login endpoint
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const existUser = await userModel.findOne({ email: email });
  if (!existUser) {
    res.status(400).send({ message: "User does not exist" });
  }
  // console.log(existUser.password)
  // console.log(password)
  const matchPassword = await comparePassword(password, existUser.password);
  if (matchPassword) {
    jwt.sign(
      { email: existUser.email, id: existUser._id, name: existUser.name },
      process.env.JWT_SECRET,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json(existUser);
      }
    );
    res.status(200).send({ message: "Password matched", success: true });
  } else {
    res.status(400).send({ message: "Password do not match" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
