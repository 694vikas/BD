const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("the connection btween db is succesfully");
    })
    .catch((err) => {
      console.log("issues in db connection ");
      process.exit(1);
    });
};

module.exports = dbConnect;
