const mongoose = require("mongoose");
const dbConnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/authapp")
    .then(() => {
      console.log("the database is connected");
    })
    .catch((err) => {
      console.log("there is error in connecting with db");
    });
};

module.exports = dbConnect;
