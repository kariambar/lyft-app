

$(document).ready(function(){

	//----------------------- ACA VA EL HOME ------------------------------//
	//agregamos logo
	$("#cont-logo").append('<img id="logo"></img>');
	$("#logo").attr("src","https://d24wuq6o951i2g.cloudfront.net/img/events/id/247/2471884/assets/fc0.logo_standard_silver.png").addClass("img-responsive");

	//llamamos a la ID del botón Sign Up
	$("#btn-signUp").click(function(){
		$(this).attr("href","index-signup-country.html");
	});
});