"use strict";

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const moment = require('moment');
const connect = require("./lib/db-mongo.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// Connects to Mongo DB
connect(function(err, db) {
  if(err) {
    console.error(err.message);
    return;
  }

  // Factory functions for retreiving and posting tweets
  const DataHelpers = require("./lib/data-helpers.js")(db);

  // Defines routes for tweets
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  // Mount the tweets routes at the "/tweets" path prefix:
  app.use("/tweets", tweetsRoutes);

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});