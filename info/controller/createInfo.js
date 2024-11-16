const Info = require("../model/info");
// routes defining
exports.createInfo = async (req, res) => {
  try {
    const { name, mobile } = req.body;
    const response = await Info.create({ name, mobile });
    res.status(200).json({
      success: true,
      data: response,
      message: "data is created successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      message: "data is not created  ",
    });
  }
};
