const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(console.log("db connected successfully"))
    .catch((err) => {
      console.log("error in db connection ");
    });
};

module.exports = dbConnect;
