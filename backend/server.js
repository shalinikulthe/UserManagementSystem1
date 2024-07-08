const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require('./router');

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(router);
const PORT = 3002;
server.listen(PORT, (error) => {
  if (error) {
    console.log("error");
  } else {
    console.log(`server is running on ${PORT}`);
  }
});
