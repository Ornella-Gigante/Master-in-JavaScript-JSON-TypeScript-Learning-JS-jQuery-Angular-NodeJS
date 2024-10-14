'use strict'

// Arrays, arreglos y Matrices 

var nombre = "Ornella Gigante";

var nombres = ["Ornella Gigante", "Juliana Gigante", "Manolo Gracia", 53, true]; 

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C+", "C#", "C", "Pascal");

console.log(nombres);
console.log(lenguajes);


// Acceder a cualquiera de los índices 

console.log(nombres[2]);

// Sacar el primer array 

console.log(nombres[0]);

// Saber la cantidad de elementos en un array (en números)

console.log(nombres.length);


// Pedimos un elemento al usuario ingresando un cuadro de diálogo 

var elemento = parseInt(prompt("¿Qué elemento del array quieres?", 0));

// Se comprueba si el elemento está en el array 

if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que" + nombres.length);
}else{
    alert("El usuario seleccionado es:" + nombres[elemento]);
}

//Devolverá un elemento del array nombres acorde al índice ingresado por el usuario 
alert(nombres[elemento]);

// Se ingresa texto dentro del HTML 

document.write("<h1>Lenguajes de programmación populares </h1>");


//Haciendo una lista 
document.write("<ul>");

for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}

document.write("</ul>");