// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var CustomerSchema = new Schema({
  // Just a string
  barcode: {
    type: Number,
    required: true
  },

  attended: {
    type: Boolean,
    required: true
  }
  // Just a string
  name: {
    type: String,
    required: true
  }, 

  userVenmoEmail: {
  	type: String,
  	required: true
  },

  optionChosen: {
  	optionName: {
  		type: String,
  		required: true
  	},
  	optionPrice: {
  		type: Number,
  		required: true
  	},
  	quantitySelect: {
  		type: Number,
  		required: true
  	}
  }

});

var Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;