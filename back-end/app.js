// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const productsController = require("./controllers/productsController")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use("/products", productsController);

// ROUTES
app.get("/", (_, response) => {
  console.log("GET request to /")
  response.send("Hello, world!");
});

app.get("*", (_, response) => {
  response.status(404).json({error: "Page not found"})
})

// EXPORT
module.exports = app;
