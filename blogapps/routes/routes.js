const express = require("express");
const router = express.Router();

// import handler
const { commentHandler } = require("../controller/commentController");
const { postHandler, getAllPost } = require("../controller/postController");
const { likeHandler } = require("../controller/likeController");

// routes
router.post("/comments/create", commentHandler);
router.post("/posts/create", postHandler);
router.get("/posts/allpost", getAllPost);
router.post("/posts/like", likeHandler);

module.exports = router;
