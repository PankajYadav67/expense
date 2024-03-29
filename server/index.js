const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth.route");
const protectedRouter = require("./routes/protected.route");
const connection = require("./config/db");
const cookieParser = require("cookie-parser");

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

app.use("/auth", authRouter);
app.use("/protected", protectedRouter);

app.get("/", (req, res) => {
  res.send(
    "This is HomePage if its visiable for you its mean your express app running fine..."
  );
});

app.post("/post", (req, res) => {
  res.send("got it");
});


app.listen(PORT, async () => {
  try {
    await connection;
  } catch {
    console.log("there error in connecting to mongodb");
  }
  console.log(`started at ${PORT}`);
});
