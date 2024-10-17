'use strict'

// DOM = Document Object Model 

// Se definirá una función que modificará el color 
// Cuando esta función se llame en consola de index.html, se podrá modificar al color que uno desee 

function cambiaColor(color){
    caja.style.background = color; 
}

// getElementByID solo selecciona con IDs 
// var caja = document.getElementById("micaja");

// .querySelector() selecciona desd cualquier cosa : atributo, clase, estilo, etc (+flexible que getElementById)

var caja = document.querySelector("#micaja"); // # para elementos con ID 
                                              // sin # para el nombre de la etiqueta 
                                              // . para seleccionar una clase 

// Uso de la propiedad innerHTML para modificar elementos dentro de HTML sin tener que interavtiuar con divcho HTML 
// Esta propiedad modifica el HTML desde un fichero js 

caja.innerHTML = "Texto en la caja desde JS"

//Uso de la propiedad style para modificar el estylo del HTML 

caja.style.background = "red"; 
caja.style.padding = "20px";
caja.style.color = "white";


// Agregando propiedades desde fichero js 
// Esto se agregará a HTML de manera automaática al ejecutar 

caja.style.color = "white"; 
caja.className = "hola"; 

console.log(caja); 