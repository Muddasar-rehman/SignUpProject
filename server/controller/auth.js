const UserModel = require("../model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const singup = async (req, res) => {
  try {
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    const user = await UserModel.create({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashPassword,
    });
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const singin = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      email: req.body.email,
    });
    if (!user) {
      res.status(200).json({ message: "user doest not exit" });
    }
    const isValidPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isValidPassword) {
      res.status(400).json({ message: "password does not match" });
    }
    res
      .status(200)
      .json({ message: "Successfully login", user, isValidPassword });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { singup, singin };
