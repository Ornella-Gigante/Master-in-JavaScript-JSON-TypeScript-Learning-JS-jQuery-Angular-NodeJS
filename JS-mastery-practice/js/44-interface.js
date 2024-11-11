'use strict'

$(document).ready(function(){


    // Uso de draggable() para mover los divs que contienen las cajas 
    // Mueve el elemento por la pagina web 

    $(".elemento").draggable();


    //Redimensionar los elementos 
    // Se usará el metodo resizable()

    $(".elemento").resizable(); 


    //Metodo selectable 
    // Se usará para ordenar los elementos de la lista ul 

    //  $(".lista-seleccionable").selectable();


    // Uso del metodo sortable
    // Permite listar y ordenar elementos 
    // El sortable no se puede usar junto con el selectable() 

    $(".lista-seleccionable").sortable({

        // Se generará un mensaje en consola para advertir al usuario del cambio hecho en la lista 

        update: function(event, ui){
            console.log("Cambio realizado!");
        }
    }); 


    // Droppable () 

    $("#element-movido").draggable();
    $("#area").droppable({
        drop: function(){

            // SE detectará y mandará mensaje por consola cuando el ele,ento se suelte dentro área 
            console.log("Elemento soltado dentro del área");

        }
    });


    //Efectos 
    // toggle() o fadeToggle() es lo mismo 
    // explode() divide un elemento en múltiples parte s antes de desaparecer 
    // blind()
    // fold() 
    // puff() 
    // shake() 

    $("#mostrar").click(function(){

        //$("#caja-efectos").toggle("fade");
        //$("#caja-efectos").effect("explode");
        //$("#caja-efectos").toggle("blind");
        //$("#caja-efectos").toggle("fold");
        //$("#caja-efectos").toggle("puff");
        $("#caja-efectos").toggle("shake", "slow", "400");



    });


    // Tooltip 
    // Al pasar el cursor aparecerá un mensaje emergente 

    $(document).tooltip();



    //Dialog methodd 


    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });


    // Datepicker 


    $("#calendario").datepicker();


    //Tabs 

    $("#pestanas").tabs();

});