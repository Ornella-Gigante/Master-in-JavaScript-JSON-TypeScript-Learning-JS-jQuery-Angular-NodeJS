'use strict'

/*
Programa que pida dos numeros y nos diga cual es el mayor, el menor y sin son iguales.
PLUS: Si los números no son un número p son menores o iguales a cero, nos lo vuelva a pedir. 
*/



var numero1 = parseInt(prompt('Introduce el primer número', 0));
var numero2 = parseInt(prompt('Introduce el segundo número', 0));

//Se agregan condiciones para asegurarse de que los números ingresados sean mayores que 0 y no Nan

while(numero1<=0 || numero2<=0 || isNaN(numero1) ||isNaN(numero2) ){

        numero1 = parseInt(prompt('Introduce el primer número', 0));
        numero2 = parseInt(prompt('Introduce el segundo número', 0));


}

if(numero1 == numero2){
    alert('Los números son iguales');
}else if(numero1 > numero2){
    alert('El numero mayor es:'+ numero1);
    alert('Eñ número menor es:' + numero2);
}else if(numero2 > numero1){
    alert('El numero mayor es:'+ numero2);
    alert('El número menor es:' + numero1);
}else{
    alert('Introduce números correctos');
}
