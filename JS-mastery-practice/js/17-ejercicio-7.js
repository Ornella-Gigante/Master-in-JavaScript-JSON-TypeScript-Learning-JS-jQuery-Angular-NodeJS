'use strict'

// Tabla de multiplicar de un número introducido por pantalla 


var numero= parseInt(prompt('Ingrese un númerp para crear tabla de multiplicar', 1));
var i= 1;

document.write('<h1>Tabla del numero'+ ' ' +   + numero + '</h1>');
for(i; i<=10; i++){
    document.write(i + ' x ' + numero + ' = ' + (i*numero)+ '<br/>');

} 


// Todas las tablas de multiplicar 
for (var c = 1; c <= 15; c++) {

    document.write('<h1>Tabla del numero ' + c + '</h1>');
    for (var d = 1; d <= 10; d++) {
        document.write(d + ' x ' + c + ' = ' + (d * c) + '<br/>');
    }

}

