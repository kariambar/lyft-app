
function tarifa() {
       var directionsService = new google.maps.DirectionsService;
       var directionsDisplay = new google.maps.DirectionsRenderer;
       var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 18,
         center: {lat: -34.397, lng: 150.644},
       });
       directionsDisplay.setMap(map);        var input2 = (document.getElementById("destino"));
       var autocomplete = new google.maps.places.Autocomplete(input2);
         autocomplete.bindTo("bounds", map);
       var infoWindow = new google.maps.InfoWindow({map: map});        if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           var location = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
     };
         infoWindow.setPosition(location);
         infoWindow.setContent("Estas aquí");
         map.setCenter(location);
       },
  