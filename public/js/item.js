$(document).ready(function(){
    var rest = (getParameterByName("rest"));
    switch(rest) {
        case "panda":
            rest = "Panda Express";
            break;
        case "tapex":
            rest = "Tapioca Express";
            break;
        case "rubios":
            rest = "Rubio's";
            break;
        case "roundtable":
            rest = "Round Table";
            break;
        case "shogun":
            rest = "Shogun";
            break;
        case "bombaycoast":
            rest = "Bombay Coast";
            break;
        case "hithai":
            rest = "Hi-Thai";
            break;
        case "tacovilla":
            rest = "Taco Villa";
            break;
        case "burgerking":
            rest = "Burger King";
            break;
        case "santorini":
            rest = "Santorini";
            break;
        case "subway":
            rest = "Subway";
            break;
            
    }
    $("#restname").html("Restaurant: " + rest);
});

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}