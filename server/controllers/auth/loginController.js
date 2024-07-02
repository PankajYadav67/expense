const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../../models/auth/loginModel");
let nanoid;
import("nanoid").then((module) => (nanoid = module.nanoid));
require("dotenv").config();

const SECRET = process.env.SECRET;

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch === true) {
      let { email, userId, username, fullName } = user;
      let payload = {
        email,
        userId,
        fullName,
        username,
      };

      const token = await new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET, (err, token) => {
          if (err) {
            reject(err);
          } else {
            resolve(token);
          }
        });
      });

      if (!token) {
        console.log("token not signed");
      }

      res.cookie("JWT_AUTH", token, {
        // httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Ensure secure cookies in production
        sameSite: "strict",
      });

      return res.status(200).json({
        responseJson: {
          message: "Login successfully.",
          data: { payload },
        },
        responseCode: "1",
      });
    } else {
      res.status(401).json({
        responseJson: {
          message: "Wrong credentials.",
          data: null,
        },
        responseCode: "-1",
      });
    }
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({
      responseJson: {
        message: "Server error: Error during login, please try again.",
        data: null,
      },
      responseCode: "-1",
    });
  }
};
// logout
const logoutUser = (req, res) => {
  try {
    res.clearCookie("JWT_AUTH", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Ensure secure cookies in production
      sameSite: "strict",
    });

    return res.status(200).json({
      responseJson: {
        message: "Logout successful.",
        data: null,
      },
      responseCode: "1",
    });
  } catch (error) {
    console.error("Error during logout:", error.message);
    res.status(500).json({
      responseJson: {
        message: "Server error: Error during logout, please try again.",
        data: null,
      },
      responseCode: "-1",
    });
  }
};
module.exports = { loginUser, logoutUser };
