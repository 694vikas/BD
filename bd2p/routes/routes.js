const express = require("express");
const router = express.Router();
const { createTodo } = require("../controller/createTodo");
const { getTodo, getTodoById } = require("../controller/getTodo");
const { updateTodo } = require("../controller/updatetodo");
const { deleteTodo } = require("../controller/deletetodo");
router.post("/createtodo", createTodo);
router.get("/gettodo", getTodo);
router.get("/gettodobyid/:id", getTodoById);
router.put("/updatetodo/:id", updateTodo);
router.delete("/deletetodo/:id", deleteTodo);

module.exports = router;
