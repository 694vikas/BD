const express = require("express");
const app = express();
app.use(express.json());

const infoRoutes = require("./routes/info");
//mount
app.use("/api/v2", infoRoutes);

app.listen(8000, () => {
  console.log("the port is running on 8000");
});

app.get((req, res) => {
  res.send("hello bhai how u all doing");
});

const dbConnect = require("./config/database");
dbConnect();
