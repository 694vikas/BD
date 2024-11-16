const express = require("express");
const app = express();
//db

app.use(express.json());

const routes = require("./routes/routes");
const dbConnect = require("./config/db");
app.use("/api/v1", routes);

app.listen(4000, () => {
  console.log("the server is started on 4000");
});
dbConnect();

app.get("/", (req, res) => {
  res.send("hello vikas");
});
