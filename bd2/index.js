const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

//middleware ki need to pass json ki body;
app.use(express.json());

//import routes for todo API
const todoRoutes = require("./routes/todos");
// MOUNT the todo API routes
app.use("/api/v1", todoRoutes);
//connection of databases
app.listen(PORT, () => {
  console.log(`Server started successfully on ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();
// start the server
app.get("/", (req, res) => {
  res.send(`<h1>hello home pages of main website</h1>`);
});
