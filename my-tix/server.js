//Include Server Dependencies
var express =  require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

// Requiring Models
var Customer = require('./models/Customer')
var Event = require("./models/Event")
var Option = require("./models/Option")
var User = require("./models/user")

//Creating Express app

var app = express();
var PORT = process.env.PORT || 3001;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// ------------------------------------------------

// MongoDB configuration (Change this URL to your own DB)

mongoose.promise = Promise
if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI)
} else {
	mongoose.connect('mongodb://localhost/myTix2') // local mongo url
}
const db = mongoose.connection
db.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`)
})
db.once('open', () => {
	console.log('You have successfully connected to your mongo database')
})
// -------------------------------------------------

require("./routes/api-routes")(app)
// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});