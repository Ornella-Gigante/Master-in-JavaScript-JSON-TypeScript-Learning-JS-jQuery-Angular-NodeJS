
// Definiendo la función 
// numero --> lo que ingresa 
// :string --> lo que retorna 
// Tipado fuerte: variables con un tipo de tipado fijo 


function getNumero(numero = 12):string{  
    return "El numero es: " + numero;
} 

console.log(getNumero()); 