const router = require("express").Router();
const {
  createIncome,
  getAllIncomes,
  updateIncome,
  deleteIncome,
} = require("../../controllers/transactions/incomeController");
const {
  createExpense,
  getAllExpenses,
  updateExpense,
  deleteExpense,
} = require("../../controllers/transactions/expenseController");

router.post("/addIncome", createIncome);
router.get("/getIncomes", getAllIncomes);
router.patch("/updateIncome", updateIncome);
router.delete("/deleteIncome", deleteIncome);

router.post("/addExpense", createExpense);
router.get("/getExpenses", getAllExpenses);
router.patch("/updateExpense", updateExpense);
router.delete("/deleteExpense", deleteExpense);

module.exports = router;
