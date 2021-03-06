/**
 * Introduction to Human-Computer Interaction
 * Lab 2
 * --------------
 * Created by: Michael Bernstein
 * Last updated: December 2013
 */
var PORT = 3000;

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
var express = require('express');

// Create the server instance
var app = express();

// Create Handlebars instance
var exphbs = require('express3-handlebars');

app.engine('handlebars', exphbs({defaultlayout: 'main'}));
app.set('view engine', 'handlebars');

// Print logs to the console and compress pages we send
app.use(express.logger());
app.use(express.compress());
app.use(express.bodyParser());

// Return all pages in the /static directory
// whenever they are requested at '/'
// e.g., http://localhost:3000/index.html
// maps to /static/index.html on this machine
//app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/'));

//Require the routes folder
var index = require('./routes/index.js')
var place = require('./routes/place.js');
var meal = require('./routes/meal.js');
var affordability = require('./routes/affordability.js');
var nutrition = require('./routes/nutrition.js');
var home = require('./routes/home.js');


// Setup routing for requests
app.get('/', index.view);

app.get('/grid', index.viewGrid);


app.get('/home', home.home);

app.post('/home', home.homePost);

app.get('/home_test', home.homeTest);

app.post('/home_test', home.homePost);

app.get('/login', function(req, res) {
    res.render('login')
});

app.get('/affordability', affordability.view);

app.get('/nutrition', nutrition.view);

app.get('/restaurant', function(req, res) {
    res.render('restaurant')
});

app.get('/meal', meal.view);

app.get('/place', place.view);

app.get('/help', function(req, res) {
    res.render('help')
});

app.get('/about', function(req, res) {
    res.render('about')
});

// Start the server
var port = process.env.PORT || PORT; // 80 for web, 3000 for development
app.listen(port, function() {
	console.log("Node.js server running on port %s", port);
});