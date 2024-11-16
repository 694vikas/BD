const express = require("express");
const app = express();
const dbConnect = require("./config/db");
app.use(express.json()); // body parsing k liye
require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.listen(4000, () => {
  console.log("the server is started");
});
dbConnect();

// routes
const routes = require("./routes/routes");

app.use("/api/v1", routes);
