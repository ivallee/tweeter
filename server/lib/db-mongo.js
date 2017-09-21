"use strict";

// Connects to Database
const {MongoClient} = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

module.exports = function connect(cb) {
  MongoClient.connect(MONGODB_URI, cb);
};