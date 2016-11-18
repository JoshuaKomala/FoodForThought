//global variable
var username = "";

exports.home = function(req,res){
    res.render('home', {username: username, ab: true});
};

exports.homeTest = function(req,res){
    res.render('home', {username: username, ab: false});
};

exports.homePost = function(req,res){
	username = req.body.username;
    res.render('home');
};