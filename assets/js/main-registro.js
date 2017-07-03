//El correo electronico debe ser un mail valido
//Almacenar el nombre y mail del usuario en localStorage
//No debe pasar a la sgte pantalla si el usuario no hace click en el checkbox.

/*function validarFormulario(){
    jQuery.validator.messages.required = 'Esta campo es obligatorio.';
    jQuery.validator.messages.number = 'Esta campo debe ser num&eacute;rico.';
    jQuery.validator.messages.email = 'La direcci&oacute;n de correo es incorrecta.';
    $("#enviar").click(function(){
       var validado = $("#formulario").valid();
       if(validado){
          alert('El formulario es correcto.');
       }
    });
}*/
$(document).ready(function(){

	//se llama botón
	$(".btn").click(function(e){
		e.preventDefault();//cuando se pone prevent para que detenga el seguir el enlace, no se necesita return false en el if.
		//Se llama los value de los inputs


		localStorage.nombre = $("#first_name").val();
		var correo = $("#email").val();
		var condiciones = $("#aceptar").is(":checked");//'.is(":checked")' es una función que verifica solo casillas, select.

		//donde se alojarán las validaciones
		var errorNombre = $(".input-box")[0];
		var errorCorreo = $(".input-box")[1];
		var errorCondiciones = $(".input-box")[2];
		//se crea otra variable para crear el texto directo
		var validarError = $(errorNombre).append('<p></p>');
		var validarCorreo = $(errorCorreo).append('<p></p>');
		var validarCondiciones = $(errorCondiciones).append('<p></p>');
//Validación nombre
		function validacionNombre(){
			if(localStorage.nombre == ""){
				$(validarError).text("Debes ingresar tu nombre");
				//$(errorNombre).first();
			}else if(!/^([a-zA-Z])*$/.test(localStorage.nombre)){
				$(validarError).text("Deben ser solo letras");
			}
			
		}
		validacionNombre();

		//Validación correo
		function validacionCorreo(){
			if(correo == ""){
				$(validarCorreo).text("Debes ingresar tu correo");
			}else if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(correo))){
				$(validarCorreo).text("Debe ser un correo válido");
			}	
		}
		validacionCorreo();
	//Validación checkbox
		function validacionCheck(){
			if(!condiciones){
				$(validarCondiciones).text("Acepta las condiciones");
			}
		}
		validacionCheck();
	});
});


