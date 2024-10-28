'use strict'

// LocalStorage
// Es una manera de guardar información y poder acceder a ella fácilmente 
// Tipo de memoria 



/**
 * Comprobando disponibilidad del LOcalStorage 
 */

if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("Incompatible con LocalStorage");
}


/**
 * Guardar datos en el LocalStorage 
 */


localStorage.setItem("Titulo:", "Curso Masterizado de Javascript");


/**
 * Recuperar elemento y meterlo en el html
 * 
 * console.log --> saldrá en consola 
 * 
 * document. --> saldrá en el html (usando el id "peliculas")
 */

console.log(localStorage.getItem("Titulo:"));

document.querySelector("#peliculas").innerHTML = localStorage.getItem("Titulo:");



/**
 * Guardar objetos en el localStorage 
 */

// Definiendo el objeto JSON 

var usuario = {
    nombre: "Ornella Gigante",
    email: "ornella@gmail.com",
    github: "Ornella-Gigante",
};

// Convirtiendo el objeto JSON a formato String  para que se vea en consola de manera apropiada 

// Definiendo el localStorage object con JSON.stringify para pasarlo a JSON-String y que se vea en consola 

localStorage.setItem("usuario", JSON.stringify(usuario));



// Recuperar objeto 
// Se convierte el JSON-String en un objeto de Javascript usable con JSON.parse 


var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs); 

// Al hacer la conversión del JSON a JSON-String se puede utilizar la información del JSON (nombre, email, github) para "peliculas" ya que sond atos compatibles 


document.querySelector("#datos").append(userjs.github + " - " + userjs.nombre);


// Eliminar un elemento del storage 
localStorage.removeItem("usuario");


//Vaciar el localStrorage 

localStorage.clear();

