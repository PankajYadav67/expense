const UserModel = require("../../models/auth/loginModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { validateFields } = require("../../middlewares/auth/authMiddleware");
let nanoid;
import("nanoid").then((module) => (nanoid = module.nanoid));
require("dotenv").config();

const SECRET = process.env.SECRET;

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch === true) {
      let { email, _id } = user;
      let payload = {
        email,
        _id,
      };

      const token = new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET, (err, token) => {
          if (err) {
            reject(err);
          } else {
            resolve(token);
          }
        });
      });

      res.cookie("JWT_AUTH", await token, { httpOnly: true });

      res.status(200).json({
        responseJson: {
          message: "Login successfully.",
          data: token,
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

module.exports = { loginUser };
