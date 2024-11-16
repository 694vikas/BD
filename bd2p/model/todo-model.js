const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    require: true,
    default: Date.now(),
  },
  updatedAt: {
    type: String,
    require: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("todo", todoSchema);
