const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/authwalapractise")
    .then(() => {
      console.log("db is connected successfully");
    })
    .catch(() => {
      console.log("error in connection with db");
    });
};

module.exports = dbConnect;
