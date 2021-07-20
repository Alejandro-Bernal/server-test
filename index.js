require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// config files
const dbConnect = require("./config/mongodb-connection");
// middleware requirements
const cors = require('cors');
const mongooseUV = require('mongoose-unique-validator');


const server = express();
const defaultPort = process.env.PORT;

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// create connection
dbConnect();

server.get("/", (req, res) => {
  res.status(200).send({
    statusCode: 200,
    message: "Server is OK",
  });
});

server.listen(defaultPort, () => {
  console.log(`Server Running, Listening on Port: ${defaultPort}`);
});
