const express = require("express");
const router = express.Router();

//import controller
const { createInfo } = require("../controller/createInfo");
const {
  getAllInfo,
  getInfo,
  updateInfo,
  deleteInfo,
} = require("../controller/getAllInfo");

//api defining
router.post("/createInfo", createInfo);
router.get("/getAllInfo", getAllInfo);
router.get("/getInfo/:id", getInfo);
router.put("/updateInfo/:id", updateInfo);
router.delete("/deleteInfo/:id", deleteInfo);

module.exports = router;
