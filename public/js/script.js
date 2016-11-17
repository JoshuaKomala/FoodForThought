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
		$.ajax({
			url: "/home", 
			method: "post",
			data: {"username": $("#username").val()}, 
		}).done(function(){
			window.location = "home";
		});
	}
}