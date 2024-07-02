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
const { authMiddleware } = require("../../middlewares/auth/authMiddleware");

router.post("/addIncome", authMiddleware, createIncome);
router.get("/getIncomes", authMiddleware, getAllIncomes);
router.patch("/updateIncome", authMiddleware, updateIncome);
router.delete("/deleteIncome", authMiddleware, deleteIncome);

router.post("/addExpense", authMiddleware, createExpense);
router.get("/getExpenses", authMiddleware, getAllExpenses);
router.patch("/updateExpense", authMiddleware, updateExpense);
router.delete("/deleteExpense", authMiddleware, deleteExpense);

module.exports = router;
