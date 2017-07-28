var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var session = require("express-session");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

//configure mongoose and mongo
var promise = mongoose.connect("mongodb://localhost/users_db",{
	  useMongoClient: true,
	});

var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//passport
var passport = require("./config/passport");

// Initialize Express
var app = express();

//Host on this port
var PORT = process.env.PORT || 3000;

// Configure app with morgan and body parser


app.use(logger("dev"));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true}));
 app.use(bodyParser.text());
 app.use(bodyParser.json({ type: "application/vmd.api+json"}));

//require database models
// var db = require("./models/User");

 //host static docs
 app.use('/static', express.static("public"));
 // app.get('/', (req, res) => {
 // 	console.log('hello')
 // 	res.json({test: 'hello'})
 // })
 //Passport
 // app.use(session({ secret: "food secret", resave: true, saveUninitialized: true}));
 app.use(passport.initialize());
 app.use(passport.session());

 //routes
 require("./routes/api-routes")(app);

 app.listen(PORT, function(){
 	console.log('App listening on Port ' + PORT);
 });