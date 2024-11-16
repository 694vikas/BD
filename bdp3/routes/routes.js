const express = require("express");
const router = express.Router();
// controller
const { commentController } = require("../controllers/commentController");

// routes handler

router.post("/comments/create", commentController);

module.exports = router;
