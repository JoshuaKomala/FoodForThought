var data = require('../data.json');

exports.view = function(req,res){
    var restaurant = req.query.rest;
    res.render('place' , {myMenu: data[restaurant]});  
};