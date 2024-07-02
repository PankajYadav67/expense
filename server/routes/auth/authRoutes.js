const router = require("express").Router();
const {
  loginUser,
  logoutUser,
} = require("../../controllers/auth/loginController");
const { registerUser } = require("../../controllers/auth/registerController");
const {
  validateFields,
  checkExistingUser,
} = require("../../middlewares/auth/authMiddleware");

// Debugger
// console.log("loginUser:", loginUser); // Should log the function definition
// console.log("checkExistingUser:", checkExistingUser); // Should log the function definition

router.post("/login", validateFields, loginUser);
router.post("/logout", validateFields, logoutUser);
router.post("/signUp", validateFields, checkExistingUser, registerUser);

module.exports = router;
