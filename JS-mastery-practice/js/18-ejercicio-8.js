'use strict'

/*

Calculadora: 

- Pida dos numeros por pantalla 
- Vuelva a pedir numeros is estan mal ingresados
- Que muestre en el body de la pagina en una alerta y por consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras pedidas. 

*/


// Pidiendo los números 

var numero1 = parseInt(prompt('Introduce el primer número', 0));
var numero2 = parseInt(prompt('Introduce el segundo número', 0));


// Corroborando que lo ingresado sean numeros 


while(numero1 < 0 || numero2 < 0 || isNaN(numero1 || isNaN(numero2))){

    numero1 = parseInt(prompt('Introduce el primer número', 0));
    numero2 = parseInt(prompt('Introduce el segundo número', 0));

}

//Se mostrará en la consola el resultado:
// Usando '<br/>' para el HTML
var resultado = 'La suma es: ' + (numero1 + numero2) + '<br/>' + 
                'La resta es: ' + (numero1 - numero2) + '<br/>' + 
                'La multiplicación es: ' + (numero1 * numero2) + '<br/>' + 
                'La división es: ' + (numero1 / numero2) + '<br/>';

// Usando '\n' para la consola y la alerta
var resultadoTexto = 'La suma es: ' + (numero1 + numero2) + '\n' + 
                     'La resta es: ' + (numero1 - numero2) + '\n' + 
                     'La multiplicación es: ' + (numero1 * numero2) + '\n' + 
                     'La división es: ' + (numero1 / numero2) + '\n';

// Mostrar en el cuerpo de la página
document.write(resultado);

// Mostrar en la consola
console.log(resultadoTexto);

// Mostrar en una alerta
alert(resultadoTexto);
