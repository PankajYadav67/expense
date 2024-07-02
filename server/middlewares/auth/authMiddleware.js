const jwt = require("jsonwebtoken");
const UserModel = require("../../models/auth/loginModel");
const SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const token = req.cookies.JWT_AUTH;

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
// Middleware to validate required fields
const validateFields = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      responseJson: {
        message: "Email and password are required fields.",
        data: null,
      },
      responseCode: "-1",
    });
  }
  next();
};

// Middleware to check if a user with the same email already exists
const checkExistingUser = async (req, res, next) => {
  const { email, username } = req.body;

  try {
    const existingUsername = await UserModel.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({
        responseJson: {
          message:
            "The username you have chosen is already taken. Please choose a different username.",
          data: null,
        },
        responseCode: "-1",
      });
    }

    const existingEmail = await UserModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        responseJson: {
          message:
            "An account with this email already exists. Please use a different email address.",
          data: null,
        },
        responseCode: "-1",
      });
    }

    next();
  } catch (error) {
    console.error("Error checking existing user:", error.message);
    res.status(500).json({
      responseJson: {
        message:
          "An error occurred while checking for existing users. Please try again later.",
        data: null,
      },
      responseCode: "-1",
    });
  }
};

module.exports = { validateFields, checkExistingUser, authMiddleware };
