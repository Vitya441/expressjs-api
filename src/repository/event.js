const mongoose = require("mongoose");
const eventScheme = require("../schemas/event");

const Event = mongoose.model("Event", eventScheme);

module.exports = Event;