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

// Return all pages in the /static directory
// whenever they are requested at '/'
// e.g., http://localhost:3000/index.html
// maps to /static/index.html on this machine
//app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/'));

// Setup routing for requests
app.get('/', function(req, res) {
    res.render('index')
});

app.get('/home', function(req, res) {
    res.render('home')
});

app.get('/login', function(req, res) {
    res.render('login')
});

app.get('/affordability', function(req, res) {
    res.render('affordability')
});

app.get('/nutrition', function(req, res) {
    res.render('nutrition')
});

app.get('/meal', function(req, res) {
    res.render('meal')
});

app.get('/restaurant', function(req, res) {
    res.render('restaurant')
});

app.get('/place', function(req, res) {
    res.render('place')
});

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