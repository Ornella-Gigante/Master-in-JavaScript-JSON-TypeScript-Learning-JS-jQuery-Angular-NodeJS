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


// Focus 
// Captura el elemento en el cual el usuario está dandole focus 


var input = document.querySelector("#campo_nombre");
input.addEventListener('focus', function(){
    console.log("[focus]Estás dentro del input"); 
});


// Blur 
// Captura el momento en el que el usuario deja de interactuar con el elemento y sale del foco 


var input = document.querySelector("#campo_nombre");
input.addEventListener('blur', function(){


    console.log("[blur]Estas fuera del input");
});


// Keydown 
// Keydown solo sucede cuando se está pulsando una tecla en el momento 
// Se usará fromCharCode() el cual pasa los valores correspondientes a numéricos 
// Con event.keyCode sé que tecla estoy pulsando 

input.addEventListener('keydown', function(event){


    console.log("[keydown]Pulsando esta tecla", String.fromCharCode(event.keyCode));


});




//Keypress 
//Cuando estoy presionando la tecla

input.addEventListener('keypress', function(event){

    console.log("[keypress]Tecla presionada", String.fromCharCode(event.keyCode));

});


// Keyup 
// Cuando levanto el dedo de la tecla 

input.addEventListener('keyup', function(event){

    console.log("[keyup] Tecla soltada", String.fromCharCode(event.keyCode));

});


