const todo = require("../model/todo-model");
exports.getTodo = async (req, res) => {
  try {
    const data = await todo.find({});
    res.status(200).json({
      message: "all data is fetched ",
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong ",
      success: false,
      data: data,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    //id lena hoga
    const { id } = req.params;
    //find by id
    const data = await todo.findById({ _id: id });
    res.status(200).json({
      message: "the data is fetched",
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
      success: false,
    });
  }
};
