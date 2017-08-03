
// Requiring Path and Models
var path  = require("path");
var app = require("express")
var Event = require("../models/Event")
var Option = require("../models/Option")


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


	app.post("/api/Events/:id", function(req,res){
		console.log(req)
		Event.findByIdAndUpdate({
				"_id": req.params.id

		}).exec(function(err,doc){
			if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
		})
	})

	


	}




