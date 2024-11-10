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

    $(".lista-seleccionable").selectable();

});