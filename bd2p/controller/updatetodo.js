const todo = require("../model/todo-model");
exports.updateTodo = async (req, res) => {
  try {
    // id lena
    const { id } = req.params;
    const { title, description } = req.body;
    // ab update krna hai
    const data = await todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );
    res.status(200).json({
      message: "the data is updated successfully",
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
      success: false,
    });
  }
};
