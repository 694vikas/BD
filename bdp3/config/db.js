const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(console.log("db connected sucessfully"))
    .catch((err) => {
      console.log(err, "error in connection of db");
    });
};
module.exports = dbConnect;
