const mongoose = require("mongoose");
const dbConnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/khesarip1")
    .then(() => {
      console.log("db is connected");
    })

    .catch((err) => {
      console.log("error in db connection");
    });
};

module.exports = dbConnect;
