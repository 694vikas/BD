//server inititate

const express = require("express");
const app = express();

//used tpo parse req.body in express

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("the server has started at 3000 port");
});

//routes get

app.get("/", (req, res) => {
  res.send("hello vikas bhaiya");
});

// // routes post
app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("the car is submitted");
});
// const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://localhost:27017/myDatabase", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("connection Succesful");
//   })
//   .catch(() => {
//     console.log("connection failed");

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/mydb1")
  .then(() => {
    console.log("The connection is successful");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });
