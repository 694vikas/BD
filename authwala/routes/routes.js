const express = require("express");
const router = express.Router();

// handler
const { signUp } = require("../controller/userController");

// router
router.post("/signup", signUp);

module.exports = router;
