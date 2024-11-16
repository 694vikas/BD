const postModel = require("../models/postModel");
const commentModel = require("../models/commentModel");
//comment handler routes
exports.commentHandler = async (req, res) => {
  try {
    // fetch data of filed
    const { post, user, body } = req.body;
    //create object with this body
    const newComment = new commentModel({
      post,
      user,
      body,
    });

    const savedComment = await newComment.save();

    // updated post with comment wala
    const updatedPost = await postModel
      .findByIdAndUpdate(
        post,
        { $push: { comments: savedComment._id } },
        { new: true }
      )
      .populate("comments")
      .exec();
    // res send
    res.json({
      post: updatedPost,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "failed to comment",
      success: false,
    });
  }
};
