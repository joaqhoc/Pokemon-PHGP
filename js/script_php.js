// JS script_php.js
// Creado por Joaquin Centurion
// Para Pokémon Rooms | PHGP
// Correo: soportechispita@gmail.com
// Facebook: Joaquin Centurion

$(document).ready(function(){

	$('ul.manager a').click(function(){
		
		var countSpan = $('.download-count',this);
		countSpan.text( parseInt(countSpan.text())+1);
	});
});