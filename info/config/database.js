const mongoose = require("mongoose");
const dbConnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/info")
    .then(() => {
      console.log("db ka connection ho gya");
    })
    .catch((err) => {
      console.log("error aya hai in connection with database");
    });
};
module.exports = dbConnect;
