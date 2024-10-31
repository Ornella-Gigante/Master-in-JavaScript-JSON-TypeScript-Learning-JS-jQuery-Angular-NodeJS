'use strict'


// Variable que almacenará la fecha 
var fecha = new Date(); 

// Variable que almacenará el mes 

var mes = fecha.getMonth() +1 ; // se suma  +1 porque empieza de  0  


// Variable que almacenará el año
var year = fecha.getFullYear(); 


//Variable que almacenará el día de la semana 
var dia = fecha.getDay();

// Variable que te dice la hora 

var hora = fecha.getUTCHours();


// Variable que te dice los minutos

var minutos = fecha.getMinutes();

// Se usará ${} para meter el valor de la variable YEAR en la cadena
var textoHora = `
El año es: ${year} 
El mes es: ${mes}
El día es: ${dia}
La hora es:${hora}:${minutos}hs`;

console.log(textoHora);