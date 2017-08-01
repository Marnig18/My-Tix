// Requiring Path and Models
var path  = require("path");
var Option = require("../models/Option")
var app = require("express")
var Event =require("../models/Event")


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

	


	}


