const router = require("express").Router();
const {
  createIncome,
  getAllIncomes,
  updateIncome,
  deleteIncome,
} = require("../controllers/transactions/incomeController");
const {
  createExpense,
  getAllExpenses,
  updateExpense,
  deleteExpense,
} = require("../controllers/transactions/expenseController");

router
  .post("/add-income", createIncome)
  .get("/get-incomes", getAllIncomes)
  .update("/update-income", updateIncome)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", createExpense)
  .get("/get-expenses", getAllExpenses)
  .update("/update-expense", updateExpense)
  .delete("/delete-expense/:id", deleteExpense);

module.exports = router;
