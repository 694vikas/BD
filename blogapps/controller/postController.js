const postModel = require("../models/postModel");
const commentModel = require("../models/commentModel");

exports.postHandler = async (req, res) => {
  try {
    // getting data from req.body;
    const { title, body } = req.body;
    //object bano
    const data = new postModel({
      title,
      body,
    });
    // db me bhi set ho gya hai
    const savedPost = await data.save();
    res.json({
      message: "the post created successfully",
      post: data,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "issues in creating the post",
    });
  }
};

exports.getAllPost = async (req, res) => {
  try {
    const allPost = await postModel.find({}).populate("comments").exec();
    res.json({
      message: "all data is retrived",
      success: true,
      data: allPost,
    });
  } catch (error) {
    res.json({
      message: "error in fetching the post",
      success: false,
    });
  }
};
