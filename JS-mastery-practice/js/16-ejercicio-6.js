'use strict'

/*
Que nos diga si un numero es par o impar 
1.Ventana prompt
2. Si no es valido que nos pida de nuevo el numero 
*/




var numero= parseInt(prompt('Introduce un numero:', 0));

// Si no es numero, seguirá pidiendo el numero hasta que sea el tipo correcto 
while(isNaN(numero)){

    numero= parseInt(prompt('Introduce un numero:', 0));

}if(numero % 2 == 0){
    alert('Es un numero par');

}else{
    alert('Es impar');
}