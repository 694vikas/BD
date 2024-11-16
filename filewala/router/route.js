const express = require("express");
const router = express.Router();
//controller lana
const {
  localFileUpload,
  imageUpload,
  videoUpload,
  imageSizeReducer,
} = require("../controller/file");

// router
router.post("/localfileupload", localFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
router.post("/imagesizereducer", imageSizeReducer);

module.exports = router;
