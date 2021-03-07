const express = require("express");
const mongoose = require("mongoose");

const db = require("./database/config");
const routes = require("./routes");
const { API_PORT = "3000" } = process.env;

class Api {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use("/api", routes);
  }

  listen() {
    this.express.listen(API_PORT, () => {
      console.log(`Api is listening to port ${API_PORT}`);
    });
  }
}

module.exports = Api;
