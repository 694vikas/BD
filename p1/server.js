const express = require("express");
const dbConnect = require("../p1/config/db");
const app = express();
app.use(express.json());
app.listen(3000, (req, res) => {
  console.log("server is started");
});

require("../p1/config/db");
dbConnect();
