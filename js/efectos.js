// JS efectos.js
// Creado por Joaquin Centurion
// Para Pokémon Rooms | PHGP
// Correo: soportechispita@gmail.com
// Facebook: Joaquin Centurion

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});
