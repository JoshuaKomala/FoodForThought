$('#nav_back').on("click",function(){
	window.history.back();
});

$(".dish").on("click",function(){
    var restaurant= $("#restname").attr("value");
    var dish = $(this).attr("value");
    window.location = "meal?rest=" + restaurant + "&id=" + dish; 
});

