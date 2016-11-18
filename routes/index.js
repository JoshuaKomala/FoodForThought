exports.view = function(req,res){
    res.render('index', {'grid': false});  
};

exports.viewGrid = function(req,res){
    res.render('index', {'grid': true});  
};