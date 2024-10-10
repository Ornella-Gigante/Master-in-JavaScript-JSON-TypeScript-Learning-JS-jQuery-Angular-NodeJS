'use strict'

/*

Muestre todos los numeros divisores de un número introduce en prompt 

*/



var numero= parseInt(prompt('Introduce un número', 1));
var i= 1;

for( i; i <= numero; i++){

    if(numero%i == 0){

        

        console.log('Divisor' + i);
    

    }
}