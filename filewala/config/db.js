const mongoose = require("mongoose");
const dbConnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/fileupload")
    .then(() => {
      console.log("db connection is successfully");
    })
    .catch((err) => {
      console.log("error aya hai db connection", err);
    });
};

module.exports = dbConnect;
