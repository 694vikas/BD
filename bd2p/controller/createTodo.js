const todo = require("../model/todo-model");

exports.createTodo = async (req, res) => {
  try {
    //data lena
    const { title, description } = req.body;
    //update in db
    const data = await todo.create({ title, description });

    res.status(200).json({
      message: "the file is submitted successfully",
      data: data,
      success: true,
    });
  } catch (error) {
    res.status(200).json({
      message: "the file is failed to submit",
      data: error.message,
      success: false,
    });
  }
};
