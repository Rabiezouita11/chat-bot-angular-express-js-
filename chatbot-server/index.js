/**
 * Required External Modules
 */
const http = require('http');
const express = require("express");
const path = require("path");
const { setSocketInstance } = require('./socket');
/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

const server = http.Server(app);
setSocketInstance(server);

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
  });


  /**
 * Server Activation
 */

server.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });

  
