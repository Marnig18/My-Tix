// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var OptionSchema = new Schema({

  optionName: {
    type: String,
    required: true
  }, 

  optionDescription: {
    type: String
  },

  optionPrice: {
    type: Number,
    required: true
  },

  soldOut: {
    type: Boolean
  },

  optionQuantity: {
    type: Number,
    required: true
  }, 

  numberBought: {
    type: Number,
    // required: true
  }

});

var Option = mongoose.model("Option", OptionSchema);

module.exports = Option;