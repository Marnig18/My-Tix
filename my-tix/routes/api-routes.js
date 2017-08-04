
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

app.get("/api/barcode", function(req, res){
		console.log("In Barcode API Get Request");

	  const barcode = req.query.barcode;
	  if(!barcode) return res.status(400).json({message:'"barcode" is required'})

	  // Is it in the database, if so run this function	
		let onFindComplete = (err,doc)=>{
			if(err || !doc) {
				let errMsg = (err && err.message ? err.message : 'No customer found with that bar code :' + barcode)
				console.log(errMsg)
				
				return res.status(400).json({message:errMsg})
			}
			if(!doc.attended){
				doc.attended = true;
				doc.save((err,saveResponse)=>{
					
					if(err) {
						console.log('Attended flag could not be changed to true')
					}

					return res.status(200).json({message: 'Enjoy the show'}) 
				})
			} else {
				return res.status(400).json({message: 'Ticket is not valid'}) 
			}


		}
		Customer.findOne({barcode}).exec(onFindComplete)


	


	}




