// Tipos de datos 
//STRING
var cadena = "NELLA";
//NUMERO 
var numero = 12;
//BOOLEANO 
var verdadero_falso = true;
// ANY (CUALQUIER VALOR) 
var cualquiera = "hola";
cualquiera = 80;
//ARRAYS 
var lenguajes = ["PHP", "JS", "TS", 23];
var years = [12, 13, 14, "hola"];
// MULTIPLE TIPO DE DATOS
var cadenaMultiple = "nellanells";
// VAR Y LET , MISMO QUE EN JS 
// VAR ES GLOBAL , SE REDEFINE A NIVEL GLOBAL, NO RESPETA LOS BLOQUES 
// LET ES POR BLOQUE (SCOPE), SE REDEFINE DENTRO DEL BLOQUE, ES MÁS MODERNO Y RECOMENDADO 
var numero1 = 10;
var numero2 = 20;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 35;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
console.log(cadena);
console.log(numero);
console.log(verdadero_falso);
console.log(cualquiera);
console.log(lenguajes);
console.log(years);
console.log(cadenaMultiple);
