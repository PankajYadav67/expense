const Income = require("../../models/Transcations/incomeModel");
const { getMonthOfDate } = require("../../utils/transactionHelper");
let nanoid;
import("nanoid").then((module) => (nanoid = module.nanoid));

// Create a new income
exports.createIncome = async (req, res) => {
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

    const newIncome = new Income({
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

    await newIncome.save();

    res.status(201).json({
      responseJson: {
        message: "Income transaction saved successfully.",
        data: newIncome,
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

// Get all incomes
exports.getAllIncomes = async (req, res) => {
  try {
    const { userId } = req.body;
    //desc order
    const incomes = await Income.find({ userId }).sort({ date: -1 });

    if (!incomes || incomes?.length <= 0) {
      return res.status(404).json({
        responseJson: {
          message: "No income records found for user.",
          data: null,
        },
        responseCode: "-1",
      });
    }

    res.status(200).json({
      responseJson: {
        message: "All income records retrieved successfully.",
        data: incomes,
      },
      responseCode: "1",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      responseJson: {
        message: "Server error: unable to retrieve income records.",
        data: null,
      },
      responseCode: "-1",
    });
  }
};

// Update an income
exports.updateIncome = async (req, res) => {
  try {
    const { id, amount, mode, description, date } = req.body;

    const updatedIncome = await Income.findByIdAndUpdate(
      id,
      { $set: { amount, mode, description, date } },
      { new: true }
    );

    if (!updatedIncome) {
      return res.status(404).json({
        responseJson: { message: "Income record not found.", data: null },
        responseCode: "-1",
      });
    }

    res.status(200).json({
      responseJson: {
        message: "Income transaction updated successfully.",
        data: updatedIncome,
      },
      responseCode: "1",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      responseJson: {
        message: "Server error: unable to update income transaction.",
        data: null,
      },
      responseCode: "-1",
    });
  }
};

// Delete an income
exports.deleteIncome = async (req, res) => {
  try {
    const { id } = req.body;

    const deletedIncome = await Income.findOneAndDelete({ id });

    if (!deletedIncome) {
      return res.status(404).json({
        responseJson: { message: "Income record not found.", data: null },
        responseCode: "-1",
      });
    }

    res.status(200).json({
      responseJson: {
        message: "Income transaction deleted successfully.",
        data: deletedIncome,
      },
      responseCode: "1",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      responseJson: {
        message: "Server error: unable to delete income transaction.",
        data: null,
      },
      responseCode: "-1",
    });
  }
};
