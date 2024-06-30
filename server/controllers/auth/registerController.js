const registeringUserSchema = require("../../models/auth/registerModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
let nanoid;
import("nanoid").then((module) => (nanoid = module.nanoid));
require("dotenv").config();

const registerUser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = nanoid();
    // Create a new user
    const newUser = await registeringUserSchema.create({
      userId,
      email,
      name,
      username,
      password: hashedPassword,
    });

    return res.status(200).json({
      responseJson: {
        message: "Registration successful. Welcome to our platform!",
        data: newUser,
      },
      responseCode: "1",
    });
  } catch (error) {
    console.error("Error during signup:", error.message);
    res.status(500).json({
      responseJson: {
        message:
          "An error occurred during registration. Please try again later.",
        data: null,
      },
      responseCode: "-1",
    });
  }
};

module.exports = { registerUser };
