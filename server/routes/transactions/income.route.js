// routes/incomeRoutes.js
const express = require("express");
const router = express.Router();
const incomeController = require("../controllers/incomeController");
const authMiddleware = require("../middlewares/authMiddleware");

// POST /api/incomes - Create a new income
router.post("/incomes", authMiddleware, incomeController.createIncome);

// GET /api/incomes - Get all incomes
router.get("/incomes", authMiddleware, incomeController.getAllIncomes);

// PUT /api/incomes/:id - Update an income
router.put("/incomes/:id", authMiddleware, incomeController.updateIncome);

// DELETE /api/incomes/:id - Delete an income
router.delete("/incomes/:id", authMiddleware, incomeController.deleteIncome);

module.exports = router;
