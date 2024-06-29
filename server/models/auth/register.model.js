const mongoose = require("mongoose");

const registeringUserSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const registeringUserModel = mongoose.model(
  "registeringUser",
  registeringUserSchema
);

module.exports = registeringUserModel;
