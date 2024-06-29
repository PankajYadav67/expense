const router = require("express").Router();
const { loginUser } = require("../../controllers/auth/loginController");
const { registerUser } = require("../../controllers/auth/registerController");
const {
  validateFields,
  checkExistingUser,
} = require("../../middlewares/auth/authMiddleware");

// Debugger
// console.log("loginUser:", loginUser); // Should log the function definition
// console.log("registerUser:", registerUser); // Should log the function definition
// console.log("validateFields:", validateFields); // Should log the function definition
// console.log("checkExistingUser:", checkExistingUser); // Should log the function definition

router.post("/login", validateFields, loginUser);
router.post("/signUp", validateFields, checkExistingUser, registerUser);

module.exports = router;
