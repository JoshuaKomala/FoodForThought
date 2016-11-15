exports.view = function(req,res){
    var restaurant = req.query.rest;
    res.render('index', {'grid': false});  
};

exports.viewGrid = function(req,res){
    var restaurant = req.query.rest;
    res.render('index', {'grid': true});  
};