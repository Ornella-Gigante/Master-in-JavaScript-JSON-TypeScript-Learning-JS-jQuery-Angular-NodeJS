// Activamos el modo estricto para ejecutar el código de manera más segura y evitar errores comunes.
// "use strict" ayuda a prevenir malas prácticas como el uso de variables no declaradas.
'use strict';

// Obtenemos los argumentos pasados desde la línea de comandos usando process.argv.
// process.argv es un arreglo que contiene:
// - El primer elemento: la ruta del ejecutable de Node.js.
// - El segundo elemento: la ruta del archivo JavaScript que se está ejecutando.
// - Los elementos restantes: los argumentos proporcionados por el usuario.
var params = process.argv.slice(2); // Eliminamos los dos primeros elementos para quedarnos solo con los argumentos relevantes.

// Convertimos los argumentos a números flotantes para realizar operaciones matemáticas.
// params[0] y params[1] son los números ingresados por el usuario.
var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

// Creamos una plantilla de texto utilizando template literals (`) para mostrar los resultados de las operaciones.
// Las operaciones aritméticas se realizan directamente dentro de las expresiones ${}.
var plantilla = `

    La suma es: ${numero1 + numero2}
    La resta es: ${numero1 - numero2}
    La multiplicación es: ${numero1 * numero2}
    La división es: ${numero1 / numero2}

`;

// Mostramos la plantilla en la consola utilizando console.log.
// Como usar en consola: node operaciones.js 10 5 (ejemplo de dos parametros para la calculadora)

console.log(plantilla);
