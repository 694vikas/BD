const mongoose = require("mongoose");
const postModelSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    require: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "like",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
});

module.exports = mongoose.model("Post", postModelSchema);
