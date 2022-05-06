const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const pool = require("./database.js");

const app = express();

//configuraciones
app.set("port", process.env.PORT || 3000);

//midlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); 

//Routes
app.use("/api/v1", require("./api/v1/routes/api.routes"));
app.get("/", (req, res) => {
  res.send("Selaski API");
});

module.exports = app;