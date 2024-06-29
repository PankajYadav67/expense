const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
  },
  transaction: {
    mode: {
      type: String,
      required: true,
    },
    category: {
      name: {
        type: String,
        required: true,
      },
      source: {
        type: String,
        required: true,
        default: "Unknown",
      },
    },
    description: String,
    amount: {
      type: Number,
      required: true,
    },
    typeOfTransaction: {
      type: String,
      required: true,
      default: "DR",
    },
    detailedType: {
      type: String,
      required: true,
      default: "Debit",
    },
    date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    monthOfTransaction: {
      type: String,
      required: true,
    },
  },
  timeStampOfTransactionRecord: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  rupeeSymbol: {
    type: String,
    default: "₹",
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
