// routes/expenseRoutes.js
const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");
const authMiddleware = require("../middlewares/authMiddleware");

// POST /api/expenses - Create a new expense
router.post("/expenses", authMiddleware, expenseController.createExpense);

// GET /api/expenses - Get all expenses
router.get("/expenses", authMiddleware, expenseController.getAllExpenses);

// PUT /api/expenses/:id - Update an expense
router.put("/expenses/:id", authMiddleware, expenseController.updateExpense);

// DELETE /api/expenses/:id - Delete an expense
router.delete("/expenses/:id", authMiddleware, expenseController.deleteExpense);

module.exports = router;
