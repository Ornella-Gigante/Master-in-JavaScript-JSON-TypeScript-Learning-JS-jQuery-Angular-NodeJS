'use strict' 

// Pruebas con Let y Var 

// Var es global y permite todo (mala práctica)


var numero= 40; 
console.log(numero); //Dará valor 40


if(true){
    var numero= 50;
    console.log(numero); //Dara 50
}

console.log(numero); // Dará 50 (mala práctica)




// Prueba con Let 
// Let es mejro práctica, no es global sino limitado 


var texto= "Nella Nells"; 
console.log(texto);

if(true){
    let texto= "Juja";
    console.log(texto);
}

console.log(texto) //mostrará el valor original 

