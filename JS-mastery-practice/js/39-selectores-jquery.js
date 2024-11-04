'use strict'

// Con el selector $(document) se selecciona toda la pagina web 
// Tanto $ como JQuery SON LO MISMO (es lo mismo usar uno como otro)
// SE usa el metodo ready() que funciona como evento 


jQuery(document).ready(function(){

    console.log("¡Estamos listos!"); 


    // Selector de ID 
    // Se usa el método css() para modifical el estilo del p con id = "rojo"

    $("#rojo").css("background", "red")
                         .css("color", "white");
    $("#amarillo").css("background", "yellow")
                  .css("color", "green");

    $("#verde").css("background","green")
               .css("color", "white");

});







