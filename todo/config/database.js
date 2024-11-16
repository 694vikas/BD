const mongoose = require("mongoose");

require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/hydrogen")
    .then(() => {
      console.log("db connected successfully");
    })
    .catch((err) => {
      console.log("error has ocured", `&{err}`);
    });
};

module.exports = dbConnect;
