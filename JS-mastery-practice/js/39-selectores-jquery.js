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



    // Selector de Clase 


    var mi_clase = $('.zebra');


    // Le pondrá bordes zebra a todas las clases = zebra 
    mi_clase.css("border","5px dashed black");


    // Le pondrá otras características css a todas las clases = sin_borde 
    // Al hacer click, apareceran las caracteristicas de .zebra en la etiqueta de estilo y le añade la clase zebra 


    $('.sin_borde').click(function(){

        console.log("Click dado"); 

        $(this).addClass('zebra');

    });

    

});











