const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const Token = require("../models/token");
const crypto = require("crypto");
//prisma connection
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();
const Crypto = require("crypto");
// user login
module.exports.login = async (req, res) => {
  const email = req.body.email;

  try {
    //find user in database
    const user = await User.findOne({ email: email });
    //if user is not found
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // check the password and compare the password
    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkPassword) {
      return res
        .status(404)
        .json({ success: false, message: "Password wrong" });
    }
    //add jsonwebtoken
    const token = jwt.sign(
      {
        id: user._id,
        username: user.firstname,
        email: user.email,
      },
      "MySecretKey",
      {
        expiresIn: "1h",
      }
    );

    //add token to the collection
    await Token.findOneAndUpdate(
      {
        _userId: user._id,
        tokenType: "login",
      },
      {
        token,
      },
      {
        new: true,
        upsert: true,
      }
    );

    // send response
    res.status(200).json({
      status: true,
      data: {
        token,
        user,
      },
      message: "kir to programming",
      error: undefined,
    });
  } catch (err) {
    res.status(404).json({
      status: false,
      data: undefined,
      message: "error in database connecting",
      error: err,
    });
  }
};
