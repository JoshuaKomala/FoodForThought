var data = require('../data.json');
var menu = [];
for (var key in data){
    var restaurant = data[key];
    var currMenu = restaurant["menu"];
    for(var j = 0; j < currMenu.length; j++){
        if(currMenu.name != "" && currMenu.calories != ""){
            currMenu[j]["id"] = "meal?rest="+ key + "&id=" + j;
            menu.push(currMenu[j]);
        }
    }
}
menu.sort(function(a, b){
    return parseFloat(a.calories) - parseFloat(b.calories);
});
exports.view = function(req, res) {
     
    res.render('nutrition', {menu: menu});
}