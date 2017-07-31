var Customer =require("./Customer")

var Option =require("./Option")

// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EventSchema = new Schema({
	
  Name: {
    type: String,
    required: true
  },

  StartDate: {
    type: Date, 
    required: true
  },

  EndDate: {
  	type: Date, //use moment.js
  	required: true
  },

  picture:{
    type: String,
  },

  venderVenmoEmail: {
  	type: String, 
  	// required: true
  },

  User: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },

  Option: {
    type: Array,
    ref: Option
  },

  Customer: { 
    type: Array,
    ref: Customer
  }

});

// Create the Model
var Event = mongoose.model("Event", EventSchema);

// Export it for use elsewhere
module.exports = Event;