const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  email: { type: String, trim: true },
  password: { type: String, trim: true },
  role: { type: String, enum: ["Admin", "Student", "visitor"] },
});

module.exports = mongoose.model("User", userSchema);
