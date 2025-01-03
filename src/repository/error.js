const mongoose = require("mongoose");
const errorScheme = require("../schemas/error");

const Error = mongoose.model("Error", errorScheme);

module.exports = Error;