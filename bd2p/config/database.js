const mongoose = require("mongoose");

require("dotenv").config(); // Correct usage of dotenv

const port = process.env.DB_PATH;
function dbConnect() {
  mongoose
    .connect(port)
    .then(() => {
      console.log("database started succesfully");
    })
    .catch((err) => {
      console.log(err, "erro in connection of db");
    });
}

module.exports = dbConnect;
