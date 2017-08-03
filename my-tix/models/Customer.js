// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var CustomerSchema = new Schema({
  // Just a string
  event: {
    type: String
  },

  quantitySelect: {
    type: Number
  },

  option: {
    type: String
  },

  customerName: {
    type: String
  },

  customerEmail: {
    type: String
  },

  barcode: {
    type: String
  }

});

var Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;