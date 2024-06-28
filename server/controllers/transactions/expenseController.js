const Expense = require("../../models/Transcations/expense");

// Create a new expense
exports.createExpense = async (req, res) => {
  try {
    const { amount, category, description } = req.body;
    const userId = req.user.id; // Assuming you have middleware to extract user info

    const newExpense = new Expense({
      amount,
      category,
      description,
      userId,
    });

    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get all expenses
exports.getAllExpenses = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have middleware to extract user info

    const expenses = await Expense.find({ userId }).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Update an expense
exports.updateExpense = async (req, res) => {
  try {
    const { amount, category, description } = req.body;
    const expenseId = req.params.id;

    const updatedExpense = await Expense.findByIdAndUpdate(
      expenseId,
      { $set: { amount, category, description } },
      { new: true }
    );

    if (!updatedExpense) {
      return res.status(404).json({ msg: "Expense not found" });
    }

    res.json(updatedExpense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
  try {
    const expenseId = req.params.id;

    const deletedExpense = await Expense.findByIdAndDelete(expenseId);

    if (!deletedExpense) {
      return res.status(404).json({ msg: "Expense not found" });
    }

    res.json({ msg: "Expense deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
