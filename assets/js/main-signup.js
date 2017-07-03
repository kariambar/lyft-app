
  $(document).ready(function() {
    $('select').material_select();
    var pais1 = $("#chile").val();
  	var pais2 = $("#mexico").val();
  	var pais3 = $("#per").val();

  	var posicion1 = $(".posicion")[0];
  	var posicion2 = $(".posicion")[1];
  	var posicion3 = $(".posicion")[2];
  	var posicion4 = $(".posicion")[3];

  	var input = $("#number");
  	if(pais1 == posicion2){
  		alert("skdjnf");
  	} 

  	//validar numeros

	/*$("#boton-next").click(function(){
		if(input.val().length == 9){
			$('.modal').modal();

		}

	})*/

	$("#boton-next").click(function(){
       var kei = "";
       $(".randomText").remove();
       //kei = "LAB-" + Math.floor(Math.random()*1000);
	kei = "LAB-";
       for (i=0;i<3;i++){
           kei += Math.floor(Math.random()*10);
       }
   $(".randombox").before('<p class="randomText"></p>')
   $(".randomText").append(kei);

   

   //modal
   $('.modal').modal();
   })

  });
 $('select').material_select('destroy');

 
