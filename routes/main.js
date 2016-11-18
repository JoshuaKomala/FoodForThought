exports.home = function(req,res){
    res.render('index', {'ab': false});  
};

exports.homeTest = function(req,res){
    res.render('index', {'ab': true});  
};