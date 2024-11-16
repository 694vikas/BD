const express = require("express");
const app = express();
// body -parser
app.use(express.json());
app.listen(8000, (req, res) => {
  console.log("app is started on 8000 port");
});
app.get("/", (req, res) => {
  res.send("hello vikas its a homepage");
});
// database coonection
const dbConnect = require("./config/db");
dbConnect();

//app mounting
const userRoute = require("../auth/routes/user");
app.use("/api/v3", userRoute);
