const mongoose = require("mongoose");
const infoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("info", infoSchema);
