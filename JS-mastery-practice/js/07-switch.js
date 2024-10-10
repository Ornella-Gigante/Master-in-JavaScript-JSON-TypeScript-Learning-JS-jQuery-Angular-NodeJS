'use strict'

// Swtich 

var edad= 18;
var imprime= " ";  

switch(edad){
    case 18:
        imprime= "Acabas de cumplir la mayoría de edad";
        break;
    case 25: 
        imprime= "Ya eres adulto"; 
        break; 
    case 40: 
        imprime= "Crisis de los cuarenta";
        break; 
    default: 
        imprime= "Tu edad es neutra";
        break;
}

console.log(imprime)
  
