const express = require("express");

const app = express();
const mongoose = require("mongoose");

app.listen(3000, () => {
  console.log("hello bhai server start ho gayi hai");
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/hydrogen")
  .then(() => {
    console.log("database is established");
  })
  .catch((err) => {
    console.log(`error has occured ${err}`);
  });

//route
app.get("/", (req, res) => {
  res.send(
    "<h1>hello bhai log kaise hai aap log nice to meet you all here</h1>"
  );
});
app.post("/api/v2", (req, res) => {
  const { name, sports, party } = req.body;
  if (!name || !sports || !party) {
    return res.status(400).send("Missing required fields");
  }
  console.log(name);
  console.log(sports);
  console.log(party);
  res.send("the data is submitted successfuylly ");
});
