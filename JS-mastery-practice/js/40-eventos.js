'use strict'

// Añadimos el documento 


$(document).ready(function(){

 
// PRIMER EVENTO: MOUSEOVER 


    // MouseOver y MouseOut 

    var caja = $("#caja");

    // Función de callback 
    // Cuando el raton pase pro encima, cambia de color 
    caja.mouseover(function(){
        $(this).css("background","red");
    });


    // Cuando el raton vuelva a pasar, cambia de nuevo el color 

    caja.mouseout(function(){
        $(this).css("background", "purple");

    });





});