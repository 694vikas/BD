const Todo = require("../models/todo");
//route handlers
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await Todo.findByIdAndDelete(id);
    res.send({
      success: true,
      message: "Todo Deleted",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
