const express = require("express");
const app = express();
const dbConnect = require("./config/db");
dbConnect();
app.use(express.json());
const routes = require("./routes/routes");
app.use("api/v1", routes);
app.listen(8000, () => {
  console.log("app started successfully");
});
