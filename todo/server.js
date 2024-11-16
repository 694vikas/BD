const express = require("express");
const app = express();

// middleware for parsing the data
app.use(express.json());

const todoRoutes = require("../todo/routes/todo");

//mount
app.use("/api/v1", todoRoutes);

app.listen(7000, () => {
  console.log("server started at 7000 port");
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send("this is homepage");
});
