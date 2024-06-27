const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to User model if applicable
    required: true,
  },
});

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;