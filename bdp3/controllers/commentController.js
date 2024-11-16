const Post = require("./models/postModel");
const Comment = require("./models/commentModel");

exports.createComment = async (req, res) => {
  try {
    //fetch data
    const { post, user, body } = req.body;
    //object bnaoo
    const comment = new Comment({
      post,
      user,
      body,
    });

    //upload in db
    const savedComment = await comment.save();
    //abhi saved comment ko post k under wala comment array me bhi add krna hai
    const updatedPost = await Post.findByIdAndUpdate(
      { post },
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    res.status(500).json({
      message: "failed to create a comment ",
      success: false,
    });
  }
};
