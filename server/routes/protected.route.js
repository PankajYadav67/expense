const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const protectedRouter = express.Router();


protectedRouter.get("/", authMiddleware, (req, res) => {
    res.status(200).json({ message: "Protected route accessed", user: req.user });
});

module.exports = protectedRouter;