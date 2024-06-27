const Income = require("../models/Income");

// Create a new income
exports.createIncome = async (req, res) => {
  try {
    const { amount, source, description } = req.body;
    const userId = req.user.id; // Assuming you have middleware to extract user info

    const newIncome = new Income({
      amount,
      source,
      description,
      userId,
    });

    await newIncome.save();
    res.status(201).json(newIncome);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get all incomes
exports.getAllIncomes = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have middleware to extract user info

    const incomes = await Income.find({ userId }).sort({ date: -1 });
    res.json(incomes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Update an income
exports.updateIncome = async (req, res) => {
  try {
    const { amount, source, description } = req.body;
    const incomeId = req.params.id;

    const updatedIncome = await Income.findByIdAndUpdate(
      incomeId,
      { $set: { amount, source, description } },
      { new: true }
    );

    if (!updatedIncome) {
      return res.status(404).json({ msg: "Income not found" });
    }

    res.json(updatedIncome);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Delete an income
exports.deleteIncome = async (req, res) => {
  try {
    const incomeId = req.params.id;

    const deletedIncome = await Income.findByIdAndDelete(incomeId);

    if (!deletedIncome) {
      return res.status(404).json({ msg: "Income not found" });
    }

    res.json({ msg: "Income deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
