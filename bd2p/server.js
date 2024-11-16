const express = require("express");
const app = express();
require("dotenv").config();
//body parser
app.use(express.json());
//mounting to ho gya hai yha par
const routes = require("./routes/routes");
app.use("/api/v1", routes);
const port = process.env.PORT;
app.listen(port, () => {
  console.log("the server has been started at ", `${port}`);
});
// db wala
app.get("/", (req, res) => {
  res.send("hello bhai");
});
const dbConnect = require("./config/database");
dbConnect();
