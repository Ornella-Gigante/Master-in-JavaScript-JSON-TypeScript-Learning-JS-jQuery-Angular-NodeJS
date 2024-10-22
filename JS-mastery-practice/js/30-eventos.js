'use strict'

// Eventos del ratón 

var boton = document.querySelector("#boton");

// Función que cambia de color y se usará en el onlick() 

/**
 * 
 * @returns Esta función lo que hará es modificar el color de fondo si el background es verde
 * Se utilizará además en el onlick dentro del html 
 * 
 */


function cambiarColor(){

    
    console.log("U clicked me!");

    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }

    // Cambiando un poco el estilo de los botones 
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    return true; 
}


// Agregando eventos (en este caso, evento click) 

boton.addEventListener('click', function(){

    cambiarColor();

});



// Mouse Over 
// Cuando se pase por encima de un botón, cambia de color 


boton.addEventListener('mouseover', function(){


    boton.style.background = "#ccc";
});



// Mouse Out 
// Captura el evento cuando sales de pasar por encima el ratón 


boton.addEventListener('mouseout', function(){

    boton.style.background = "purple";

});