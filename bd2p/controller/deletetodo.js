const todo = require("../model/todo-model");

exports.deleteTodo = async (req, res) => {
  try {
    // id lena
    const { id } = req.params;
    await todo.findByIdAndDelete({ _id: id });
    res.status(200).json({
      message: "the data is deleted successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "the data is not  deleted ",
      success: false,
    });
  }
};
