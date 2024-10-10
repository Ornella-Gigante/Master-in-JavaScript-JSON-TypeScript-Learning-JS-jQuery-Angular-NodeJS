'use strict'


/*
Ejercicio: 
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario 
*/


var numero1 = parseInt(prompt('Introduce el primer número:', 0));
var numero2 = parseInt(prompt('Introduce el segundo número:', 0)); 


// Añadir texto en el borde de la página

document.write('<h1>De ' + numero1 + ' a ' + numero2 + ' están los números:<h1> ')
for(var i= (numero1 + 1); i <= (numero2-1); i++){
    document.write(i+ '<br/>');

}



