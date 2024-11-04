'use strict';

// Con el selector $(document) se selecciona toda la página web 
// Tanto $ como jQuery SON LO MISMO (es lo mismo usar uno como otro)
// Se usa el método ready() que funciona como evento 

$(document).ready(function() {
    console.log("¡Estamos listos!"); 

    // Selector de ID 
    // Se usa el método css() para modificar el estilo del p con id = "rojo"
    $("#rojo").css("background", "red").css("color", "white");
    $("#amarillo").css("background", "yellow").css("color", "green");
    $("#verde").css("background", "green").css("color", "white");

    // Selector de Clase 
    var mi_clase = $('.zebra');

    // Le pondrá bordes zebra a todas las clases = zebra 
    mi_clase.css("border", "5px dashed black");

    // Le pondrá otras características CSS a todas las clases = sin_borde 
    // Al hacer clic, aparecerán las características de .zebra en la etiqueta de estilo y le añade la clase zebra 
    $('.sin_borde').click(function() {
        console.log("Click dado"); 
        $(this).addClass('zebra');
    });

    // Selectores por etiqueta 
    // Son iguales que los selectores de la clase pero se selecciona la etiqueta 
    var parrafos = $('p').css("cursor", "pointer");
    
    parrafos.click(function() {
        // Alterna la clase 'grande' en el párrafo clicado
        // Se usa toggleClass() para que se agrande y achique la letra a medida que se clickea sobre esta 
        $(this).toggleClass("grande");
    });


    // Selectores de atributos 
    // Para seleccionar lso atributos se usan los corchetes [] 

    $('[title = "Google"]').css("background", "grey");
    $('[title = "Facebook"]').css('background', 'blue');




});








