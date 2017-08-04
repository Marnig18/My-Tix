
// Requiring Path and Models
var path  = require("path");
var app = require("express")
var Event = require("../models/Event")
var Option = require("../models/Option")
var Customer = require("../models/Customer")


module.exports = function(app) {


app.post("/api/newOption", function(req, res){
		var entry = new Option(req.body);
		entry.save(function(err, doc){
			if (err) {
		          console.log(err);
		        }
		        // Or log the doc
		        else {
		          console.log(doc);
		        }
		       res.json(doc)
		})
})

app.post("/api/newEvent", function(req, res){
	var entry = new Event(req.body);
	entry.save(function(err, doc){
					if (err) {
		          console.log(err);
		        }
		        // Or log the doc
		        else {
		          console.log(doc);
		        }
		       res.json(doc) 
			})
		})

	app.get("/api/Events", function(req, res){
		Event.find({}).exec(function(err, doc){
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
		})
	})

app.get("/api/barcode", function(req, res){
  var barcode = parseInt(req.query.barcode);
  console.log("API barcode " + barcode);
  // Is it in the database, if so run this function	
	Customer.find({barcode: barcode}).exec(function(err, doc){
    if (err) {
      console.log(err);
    }
    else if (doc[0].attended == true){
      res.send("Ticket is not valid.");
    }
    else if (doc[0].attended == false){
	Customer.findOneAndUpdate({barcode: barcode}, {$set: {attended: true}}, function(err, doc){
		if(err) throw err;
		else {
			console.log("Updated");
			res.send("Valid Ticket. Enjoy the show.");
		}
	});
    }
	})
	})
}
