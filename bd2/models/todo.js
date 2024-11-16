// const mongoose = require("mongoose");
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  description: {
    type: String,
    required: true,
    maxLength: 50,
  },
  number: {
    type: Number,
    required: true,
    maxLength: 10,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

// module.exports = mongoose.model("Todo", todoSchema);
module.exports = mongoose.model("Todo", todoSchema);
