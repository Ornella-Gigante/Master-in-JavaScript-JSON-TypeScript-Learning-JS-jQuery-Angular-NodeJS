
// Tipos de datos 


//STRING

let cadena: string = "NELLA";


//NUMERO 

let numero: number = 12; 


//BOOLEANO 

let verdadero_falso: boolean = true; 

// ANY (CUALQUIER VALOR) 

let cualquiera: any = "hola"; 
cualquiera = 80 ; 

//ARRAYS 

var lenguajes: Array<any> = ["PHP", "JS", "TS",23];

let years: any[] = [12,13,14,"hola"]; 


// TIPOS DE DATOS USANDO PALABRA RESERVADA TYPE 

type letrasonumeros = string | number; 


// MULTIPLE TIPO DE DATOS

let cadenaMultiple: letrasonumeros = "nellanells"; 

// VAR Y LET , MISMO QUE EN JS 

// VAR ES GLOBAL , SE REDEFINE A NIVEL GLOBAL, NO RESPETA LOS BLOQUES 

// LET ES POR BLOQUE (SCOPE), SE REDEFINE DENTRO DEL BLOQUE, ES MÁS MODERNO Y RECOMENDADO 

var numero1 = 10; 
var numero2 = 20; 

if(numero1 == 10){
    let numero1 = 44; 
    var numero2 = 35; 
    
    console.log(numero1, numero2); 
}

console.log(numero1, numero2); 


console.log(cadena);
console.log(numero); 
console.log(verdadero_falso); 
console.log(cualquiera);
console.log(lenguajes);
console.log(years);
console.log(cadenaMultiple);


