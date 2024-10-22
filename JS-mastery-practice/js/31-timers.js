'use strict'

//Timers 


// Usando setInterval() para definir una función que haga ago cada 1 segundos 
// Se ejecuta automáticamente en la consola del developer window 

function intervalo(){

    var tiempo = setInterval(function(){

        console.log("Set Interval ejecutado");

        var encabezado = document.querySelector("h1");

        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "20px";

        }else{
            encabezado.style.fontSize = "50px";
        }

    }, 3000);

    return tiempo;


}



// SE le dara una funcion de detenerse a stop 

var tiempo = intervalo();
var stop = document.querySelector("#stop");

stop.addEventListener("click", function(){

    alert("Wow! U just stopped the interval");

    intervalo();

});



// Función de start 


var start = document.querySelector("#start");

start.addEventListener("click", function(){

    alert("Wow! U just started the interval!");
    intervalo();


});