const Expense = require("../../models/Transcations/expense");
const { getMonthOfDate } = require("../../utils/transactionHelper");
let nanoid;
import("nanoid").then((module) => (nanoid = module.nanoid));

// Create a new expense
exports.createExpense = async (req, res) => {
  try {
    const {
      userId,
      transaction: {
        mode,
        category: { name, source },
        amount,
        description,
        typeOfTransaction,
        detailedType,
        date,
      },
      timeStampOfTransactionRecord,
    } = req.body;

    const id = nanoid();
    const monthOfTransactionVal = getMonthOfDate(date);

    const newExpense = new Expense({
      id,
      userId,
      transaction: {
        mode,
        category: { name, source },
        amount,
        description,
        typeOfTransaction,
        detailedType,
        date,
        monthOfTransaction: monthOfTransactionVal,
      },
      timeStampOfTransactionRecord,
    });

    await newExpense.save();
    res.status(201).json({
      responseJson: {
        message: "Expense transaction saved successfully.",
        data: newExpense,
      },
      responseCode: "1",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      responseJson: {
        message: "Server error: unable to save income transaction.",
        data: null,
      },
      responseCode: "-1",
    });
  }
};

// Get all expenses
exports.getAllExpenses = async (req, res) => {
  try {
    const { userId } = req.body;
    //desc order
    const expenses = await Expense.find({ userId }).sort({ date: -1 });

    if (!expenses || expenses?.length <= 0) {
      return res.status(404).json({
        responseJson: {
          message: "No expense records found for user.",
          data: null,
        },
        responseCode: "-1",
      });
    }

    res.status(200).json({
      responseJson: {
        message: "All income records retrieved successfully.",
        data: expenses,
      },
      responseCode: "1",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      responseJson: {
        message: "Server error: unable to save income transaction.",
        data: null,
      },
      responseCode: "-1",
    });
  }
};

// Update an expense
exports.updateExpense = async (req, res) => {
  try {
    const { id, amount, mode, description, date } = req.body;

    const updatedExpense = await Expense.findByIdAndUpdate(
      id,
      { $set: { amount, mode, description, date } },
      { new: true }
    );

    if (!updatedExpense) {
      return res.status(404).json({
        responseJson: { message: "Expense record not found.", data: null },
        responseCode: "-1",
      });
    }

    res.status(200).json({
      responseJson: {
        message: "Expense transaction updated successfully.",
        data: updatedExpense,
      },
      responseCode: "1",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      responseJson: {
        message: "Server error: unable to save income transaction.",
        data: null,
      },
      responseCode: "-1",
    });
  }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.body;

    const deletedExpense = await Expense.findOneAndDelete({ id });

    if (!deletedExpense) {
      return res.status(404).json({
        responseJson: { message: "Expense record not found.", data: null },
        responseCode: "-1",
      });
    }

    res.status(200).json({
      responseJson: {
        message: "Expense transaction deleted successfully.",
        data: deletedExpense,
      },
      responseCode: "1",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      responseJson: {
        message: "Server error: unable to save income transaction.",
        data: null,
      },
      responseCode: "-1",
    });
  }
};
