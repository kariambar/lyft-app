/*Menú Desplegable*/
 $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    }
  );

/*Ir al Home*/
$("#inicio").click(function(){
		//este es el nuevo redireccionamiento
		$(this).attr("href","index.html");
});
/*Ir a ver perfil*/
$("#perfil").click(function(){
		//este es el nuevo redireccionamiento
		$(this).attr("href","index-perfil.html");
});
