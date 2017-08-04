
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

		}, {$set: {Name: req.body.Name,
							StartDate: req.body.StartDate,
							EndDate: req.body.EndDate,
							picture: req.body.picture}}).exec(function(err,doc){
			if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
		})
	})

	app.post("/api/Option/:id", function(req, res){
		Option.findByIdAndUpdate({
			"_id": req.params.id
		}, {$set: 
			{optionName: req.body.optionName,
				optionPrice: req.body.optionPrice,
				optionQuantity: req.body.optionQuantity,
				optionLocatin: req.body.optionLocation,
				optionDescription: req.body.optionDescription
		}}).exec(function(err, doc){
			if (err) {
      console.log(err);
    	}
    	else {
      res.send(doc);
    	}
		})
	})

	


	}



