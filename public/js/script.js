$('#nav_back').on("click",function(){
	window.history.back();
});

$(".dish").on("click",function(){
    var restaurant= $("#restname").attr("value");
    var dish = $(this).attr("value");
    window.location = "meal?rest=" + restaurant + "&id=" + dish; 
});

$(".login_form").on("keypress", function(e){
	if(e.which == '13'){
		submitForm();
	}
});

$("#submit_button").on("click",function(){
	submitForm();
});

function submitForm(){
	if($("#username") == "" || $("#password") == "" ){
		$("#login_alert").removeClass("hide");
	}
	else{
		$("#login_alert").addClass("hide");
		$.post("/home", {"username": $("#username").val()}, function(){
			window.location = "home";
		});
	}
}