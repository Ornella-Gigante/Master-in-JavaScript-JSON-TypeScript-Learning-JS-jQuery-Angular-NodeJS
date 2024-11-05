'use strict'

// Añadimos el documento 


$(document).ready(function(){

    var caja = $("#caja");
 
// PRIMER EVENTO: MOUSEOVER 

    /**
     * 
    
    // MouseOver y MouseOut 

   

    // Función de callback 
    // Cuando el raton pase pro encima, cambia de color 
    caja.mouseover(function(){
        $(this).css("background","red");
    });


    // Cuando el raton vuelva a pasar, cambia de nuevo el color 

    caja.mouseout(function(){
        $(this).css("background", "purple");

    });

     */



    // EVENTO HOVER 
    // Más efectivo y sencillo que lo anterior, pero hace lo mismo 


    function cambiaRosa(){
        $(this).css("background", "pink");

    }


    function cambiaAzul(){
        $(this).css("background","blue");
    }


    caja.hover(cambiaAzul,cambiaRosa);


    //EVENTO CLICK, DOBLE CLICK 

    caja.click(function(){
        $(this).css("background","green")
               .css("color","white");

               console.log("Click");
    });


    caja.dblclick(function(){

        $(this).css("background","pink")
               .css("color","violet");

               console.log("Doble click");

    });


    //EVENTOS FOCUS Y BLUR

    var nombre = $("#nombre");

    var datos = $("#datos");

    nombre.focus(function(){

        $(this).css("border", "2px solid green");
        console.log("FOCUS!");
    });

    nombre.blur(function() {

        $(this).css("border", "1px solid #ccc");
        datos.text($(this).val()).show();
     
    });


    //EVENTO MOUSEDOWN Y MOUSEUP 

    datos.mousedown(function(){
        $(this).css("border-color","green");
        

    });


    datos.mouseup(function(){
        $(this).css("border-color","black");

    });


    //EVENTO MOUSEMOVE

    $(document).mousemove(function(){

        //Coordenadas
        console.log("En X" + event.clientX);
        console.log("En Y" + event.clientY);
        $("#sigueme").css("left", event.clientX).css("top", event.clientY);

    });





});

