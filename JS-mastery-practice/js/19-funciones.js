"use strict"; // Se debe colocar al inicio del script para activar el modo estricto

// FUNCIONES
// Una función es una agrupación reutilizable de un conjunto de instrucciones.

/**
 * Esta es una función sin parámetros 
 * @returns {string} Retorna un mensaje simple
 */
function porConsola() {

    // Conjunto de instrucciones a ejecutar
    console.log("Suma: " + (10 + 15));
    console.log("Resta: " + (10 - 15));
    console.log("Multiplicación: " + (10 * 15));
    console.log("División: " + (10 / 14));

    // El siguiente return, o valor de retorno, solo se verá con console.log 
    return "Hola, soy una calculadora";
}

// Invocar o llamar a la función
console.log(porConsola());

console.log("**************************");

/**
 * Esta es una función con parámetros 
 * @param {number} numero1 Primer número
 * @param {number} numero2 Segundo número
 * @returns {string} Retorna un mensaje simple
 */
function ConsolaParametros(numero1, numero2) {

    // Conjunto de instrucciones a ejecutar 
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicación: " + (numero1 * numero2));
    console.log("División: " + (numero1 / numero2));

    return "Hola, soy una calculadora con parámetros";
}

// Se imprime la función con parámetros 
console.log(ConsolaParametros(12, 20));
console.log("************************");

/**
 * El primer @param será el índice del bucle 
 * El segundo @param será un número fijo (8)
 */
for (var i = 1; i <= 10; i++) {
    console.log(i);

    // Se corrige la referencia a la función 'ConsolaParametros' en lugar de 'parametros'
    ConsolaParametros(i, 8); 
}

// PARÁMETROS OPCIONALES

/**
 * Función con parámetros opcionales
 * @param {number} numero1 Primer número
 * @param {number} numero2 Segundo número
 * @param {boolean} [mostrar=false] Si es true, muestra en pantalla, si es false, en consola
 */
function calcularParametrosOpcionales(numero1, numero2, mostrar = false) {

    if (mostrar === false) {
        console.log("Suma: " + (numero1 + numero2));
        console.log("Resta: " + (numero1 - numero2));
        console.log("Multiplicación: " + (numero1 * numero2));
        console.log("División: " + (numero1 / numero2));
        console.log("*************************");
    } else {
        document.write("Suma: " + (numero1 + numero2) + "<br/>");
        document.write("Resta: " + (numero1 - numero2) + "<br/>");
        document.write("División: " + (numero1 / numero2) + "<br/>");
    }
}

calcularParametrosOpcionales(1, 4, true);

// Función que solo mostrará resultado en pantalla 
/**
 * Función que muestra el resultado en pantalla usando document.write
 * @param {number} numero1 Primer número
 * @param {number} numero2 Segundo número
 * @returns {string} Retorna un mensaje simple
 */

function porPantalla(numero1, numero2) {
    document.write("Suma: " + (numero1 + numero2) + "<br/>");
    document.write("Resta: " + (numero1 - numero2) + "<br/>");
    document.write("Multiplicación: " + (numero1 * numero2) + "<br/>");

    return "Esto es por consola";
}

console.log(porPantalla(23, 12));

// Función que tiene funciones dentro 
/**
 * Función que utiliza otras funciones dependiendo del valor de 'mostrar'
 * @param {number} numero1 Primer número
 * @param {number} numero2 Segundo número
 * @param {boolean} [mostrar=false] Si es true, muestra en pantalla, si es false, en consola
 * @returns {boolean} Retorna true siempre
 */

function Calculadora(numero1, numero2, mostrar = false) {

    if (mostrar === false) {
        ConsolaParametros(numero1, numero2); // Corrijo el llamado a la función correcta
    } else {
        porPantalla(numero1, numero2);
    }

    return true;
}

Calculadora(23, 22, true);

