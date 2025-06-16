require("dotenv").config();
const express = require("express");
const cors = require("cors");
const reviewRoute = require("./routes/reviewRoute");

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Route registration
app.use("/api/review", reviewRoute);

module.exports = app;
