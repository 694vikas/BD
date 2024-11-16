const Todo = require("../model/todo");

// routes defineing

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const response = await Todo.create({ title, description });
    res.status(200).json({
      success: true,
      data: response,
      message: "entry created succesfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      message: "entry not created due to internal error",
    });
  }
};
