const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const cookieParser = require("cookie-parser");
const { readdirSync } = require("fs");

// Routes
const protectedRouter = require("./routes/protected.route");

// Config
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.text());
app.use(cookieParser());

// connecting the route
app.use("/protected", protectedRouter);
readdirSync("./routes/transactions/").map((route) =>
  app.use("/api/v1", require("./routes/transactions/" + route))
);
readdirSync("./routes/auth/").map((route) =>
  app.use("/api/v1", require("./routes/auth/" + route))
);

app.get("/", (req, res) => {
  res.send("Welcome! Your express app is running successfully");
});

app.post("/post", (req, res) => {
  res.send("Request received.");
});

app.listen(PORT, async () => {
  try {
    await connection;
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
  console.log(`Server started on port ${PORT}`);
});
