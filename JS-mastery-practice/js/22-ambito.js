'use strict'


function holaMundo(texto){
    console.log(texto);
    // Se puede llamar a una variable global en la función 
    console.log(numero);


    // Al definir la variable dentro de la función no se podrá usar fuera
    // Es una variable local dentro de la función (no funcionará fuera de ella)

    var hola= "Este texto solo estará dentro de la función"; 

    console.log(hola); 
}

var numero = 31; 
var texto="Hola mundo mi nombre es Ornella Gigante";

holaMundo(texto);



