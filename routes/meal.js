var data = require('../data.json');

exports.view = function(req,res){
    var restaurant = req.query.rest;
    var id = req.query.id;
    res.render('meal', {location: data[restaurant].location, item: data[restaurant].menu[id]});  
};