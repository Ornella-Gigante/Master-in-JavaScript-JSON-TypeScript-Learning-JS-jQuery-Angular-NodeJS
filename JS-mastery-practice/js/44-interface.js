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

});