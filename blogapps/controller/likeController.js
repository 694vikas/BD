const postModel = require("../models/postModel");
const likeModel = require("../models/likeModel");

exports.likeHandler = async (req, res) => {
  try {
    //ftech post and user
    const { user, post } = req.body;
    //iska onject bnao
    const liked = new likeModel({
      user,
      post,
    });
    //db me liked save ho gya
    const savedLike = await liked.save();
    // ab post me bhi upload karna hoga
    const updatedPost = await postModel
      .findByIdAndUpdate(
        post,
        { $push: { likes: savedLike._id } },
        { new: true }
      )
      .populate("likes")
      .exec();

    res.json({
      message: "like the post",
      success: true,
      data: updatedPost,
    });
  } catch (error) {
    res.status(500).json({
      message: "error in likingn the post",
      success: false,
    });
  }
};
