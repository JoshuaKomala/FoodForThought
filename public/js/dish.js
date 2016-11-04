$('#nav_back').on("click",function(){
	window.history.back();
});

$(".dish").on("click",function(){
    var url = $(this).attr("value");
    window.location = url; 
});