const mongoose = require("mongoose");
const dbConnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/blogapp")
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.error("Database connection failed:", error);
    });
};

module.exports = dbConnect;
