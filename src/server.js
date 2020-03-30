const express = require("express");
require("dotenv").config();
require("./db/mongoose");
const userRouter = require("./routes/user.js");
const taskRouter = require("./routes/task.js");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3004;

const app = express();

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    // "https://priceless-bell-a33de5.netlify.com"
    "http://localhost:3000"
  );
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use(cookieParser());
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.get("/", (req, res) => {
  res.status(200).send({ message: "I'm here" });
});

app.listen(port, () => console.log(`listening on port ${port}`));
