const express = require("express");
const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodoById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");

// define api routes
router.post("/createTodo", createTodo);

router.get("/getTodo/:id", getTodoById);

module.exports = router;
