const Todo = require("../models/todo");
//route handler in controller
exports.createTodo = async (req, res) => {
  try {
    const { title, description, number } = req.body;
    //create new todo item and add in db
    const response = await Todo.create({ title, number, description });
    res.status(200).json({
      success: true,
      data: response,
      message: "item has added ",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
