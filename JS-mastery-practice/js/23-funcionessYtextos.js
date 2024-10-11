'use strict'

// Métodos que permiten transformar textos 

var numero = 444;

var texto1 = "Bienvenido al curso de Javascript de Victor Robles";

var texto2 = "es muy buen curso de Javascrypt" ;


// indexOf() --> dirá en qué posicion estan las palabras 

var busqueda = texto1.indexOf("curso"); 
console.log(busqueda);


// lastIndexOf() --> sacar la última coincidencia de la palabra a buscar (ultima aparicion)

var busqueda2 = texto1.lastIndexOf("de"); 
console.log(busqueda2);


// Método search() --> buscará una palabra (te dará el índice)

var busqueda3 = texto2.search("curso");
console.log(busqueda3);

// Método match()


var busqueda4 = texto1.match("de"); // mostrará con detalles caracte. de la palabra buscada 
console.log(busqueda4);

var busqueda5 = texto1.match(/de/g); // mostrará con detalles caracte. de la palabra buscada 
console.log(busqueda5);

// Búsqueda más exhaustiva 

var busqueda6 = texto1.substring(14,5);
console.log(busqueda6);


// Sacar una letra en concreto (la letra "R")

var busqueda7 = texto1.charAt(44);
console.log(busqueda7);

// Método que dirá con T or F si la cadena empieza con eso o no 

var busqueda8 = texto1.startsWith("Victor"); //dara F 
console.log(busqueda8);


var busqueda8 = texto1.startsWith("Bienvenido"); //dara T
console.log(busqueda8);


//Método que busca una palabra (igual que el anterior)

var busqueda8 = texto1.includes("Bienvenido");
console.log(busqueda8);



// Método de reemplazo 

var reemplazo = texto1.replace("Victor", "Ornella");
console.log(reemplazo);


// Método de separación de string a partir del carácter deseado 
// Se imprimirá a partir del índice seleccionado 

var separación = texto1.slice(14);
console.log(separación);


var separación2 = texto1.slice(" "); // se separa por espacios , devuelve Strings 
console.log(separación2);


// Método que transforma cadenas en arrays , colección de elementos [""]

var splitieando = texto1.split(" ");
console.log(splitieando);

// Método que elimina espacios en blanco sobrantes en la cadena por delante y detrás 

var texto3 = "  Hola esta es una cadena con muchos espacios sobrantes  " 
var borrarEspacios = texto3.trim();
console.log(borrarEspacios);