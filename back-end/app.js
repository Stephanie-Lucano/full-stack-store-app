// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (_, response) => {
  console.log("GET request to /")
  response.send("Hello, world!");
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
const db = require("./db/dbConfig.js");

app.get("/test", async (_, response) => {
  console.log("GET request /test")
  try {
    const allDays = await db.any("SELECT * FROM test");
    response.status(200).json(allDays);
  } catch (err) {
    response.status(404).json(err);
  }
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

app.get("*", (_, response) => {
  response.status(404).json({error: "Page not found"})
})

// EXPORT
module.exports = app;
