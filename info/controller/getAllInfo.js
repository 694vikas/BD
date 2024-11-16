const Info = require("../model/info");

exports.getAllInfo = async (req, res) => {
  try {
    const getAllInfo = await Info.find({});
    res.status(200).json({
      success: true,
      data: getAllInfo,
      message: "all data is shown",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      message: " data is not  shown",
    });
  }
};

// get single by id
exports.getInfo = async (req, res) => {
  try {
    const id = req.params.id;
    const getInfo = await Info.findById({ _id: id });
    res.status(200).json({
      success: true,
      data: getInfo,
      message: "all data is shown",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      message: " data is not  shown",
    });
  }
};

// update by id
exports.updateInfo = async (req, res) => {
  try {
    const id = req.params.id;

    const { name, mobile } = req.body;

    const updateInfo = await Info.findByIdAndUpdate(
      id,
      { name, mobile },
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: updateInfo,
      message: " data is updated",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      message: " data is not  shown",
    });
  }
};

// delete by id
exports.deleteInfo = async (req, res) => {
  try {
    const id = req.params.id;

    //   const { name, mobile } = req.body;

    const deleteInfo = await Info.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: " data is deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      message: " data is not found",
    });
  }
};
