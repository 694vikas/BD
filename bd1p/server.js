const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.listen(4000, () => {
  console.log("Hello, server is started on port 4000");
});

// Routing
app.get("/", async (req, res) => {
  try {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=c1f6994ed2c27997ade6eb10fed20200";
    const response = await fetch(url); // Await the fetch call

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    var data = await response.json(); // Await JSON conversion
    const html = `<h1>${data.main.temp}</h1> <h1>${data.name}`;

    res.send(html); // Send the data as a response
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Failed to fetch weather data" }); // Send error response
  }
});
app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);

  res.send("the car submitted successfully");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/phladb1")
  .then(() => {
    console.log("The MongoDB is connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
