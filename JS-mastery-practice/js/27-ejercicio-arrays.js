'use strict'

/**
 * EJERCICIO PRÁCTICO 
 * Se debe hacer un programa que: 
 * 
 * 1- Pida 6 números por pantalla y los meta en un array 
 * 2- Mostrar un array entero con todos sus elementos en el cuerpo de la página y la consola
 * 3- Ordenar y mostrar el array o vector 
 * 4- Invertir el orden y mostrarlo 
 * 5- Mostrar cuántos elementos tiene el array 
 * 6- Búsqueda de un valor introducido por el usuario y que verifique su posición y si existe en el array 
 * 
 */


var numeros = new Array(6);

for (var i = 0; i <= 5; i++) {
    numeros[i] = parseInt(prompt("Ingrese un número", 0));
    console.log("El número ingresado es: ", i);
}

console.log("Los números ingresados en total son:", numeros);



// Función para mostrar el array usando document.write()

function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array " + textoCustom + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>");
    });
    document.write("</ul>");
}

mostrarArray(numeros); // Mostrar en página
console.log(numeros); // Mostrar en consola



// Ordenar y mostrar
numeros.sort(function(a, b) { return a - b; }); // Orden ascendente
mostrarArray(numeros, ' ordenados ascendente');



// Invertir el orden y mostrar
numeros.reverse();
mostrarArray(numeros, ' en orden inverso');



// Contar los elementos dentro del array
document.write("<h1>El array tiene " + numeros.length + " elementos</h1>");



// Buscar un valor en el array
var busqueda= parseInt(prompt("Busca un número", 0));
var posicion= numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) { // Condición corregida
    document.write("<h1>ELEMENTO ENCONTRADO</h1>");
    document.write("<h1>POSICIÓN EN LA BÚSQUEDA: " + posicion + "</h1>");
} else {
    document.write("<h1>NO ENCONTRADO</h1>");
}
