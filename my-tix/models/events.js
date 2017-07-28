import Customer from "customers.js"

import Option from "options.js"

// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EventSchema = new Schema({
	
  title: {
    type: String,
    required: true
  },

  summary: {
    type: String, 
    required: true
  },

  date: {
  	type: Number, //use moment.js
  	required: true
  },

  venderVenmoEmail: {
  	type: String, 
  	required: true
  },

  User: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },

  Options: [Option], 

  Customer: [Customer]

});

// Create the Model
var Event = mongoose.model("Event", EventSchema);

// Export it for use elsewhere
module.exports = Event;