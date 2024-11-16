const express = require("express");
const app = express();
app.use(express.json());
//middleware add krne h
const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
//cloud se connect krna h
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();
// mount
const router = require("../filewala/router/route");
app.use("/api/v1/upload", router);
// live wala
app.listen(9000, (req, res) => {
  console.log("the app is running on 9000 ");
});
// home wala
app.get("/", (req, res) => {
  res.send(`<h2>hello vikas welcome to homepage</h2>`);
});

// db connection
const dbConnect = require("../filewala/config/db");
dbConnect();
