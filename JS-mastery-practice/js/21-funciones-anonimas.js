"use strict"; // Activa el modo estricto

// Una función anónima es una función que no tiene nombre 

var pelicula = function(nombre) {
    return "La película es: " + nombre;
}

// Un callback es una función dentro de otra función
// Se hará una función de callback con sumaYmuestra y sumaPorDos

function sumame(num1, num2, sumaYmuestra, sumaPorDos) {
    var sumar = num1 + num2; // Calculamos la suma
    sumaYmuestra(sumar); // Llamamos al primer callback
    sumaPorDos(sumar); // Llamamos al segundo callback

    return sumar; // Devolvemos el resultado de la suma
}

//En las funciones con flecha con poner el parámetro es suficiente 

sumame(5,5, dato =>{
    console.log("La suma es:", dato);
},
(dato) => {
    console.log("La suma multiplicado por dos es :", (dato* 2));
}



);


// Para que se vea en consola siempre debe usarse console.log (manera simple)
console.log(sumame(2, 3, 
    function(dato) {
        console.log("La suma es:", dato);
    }, 
    function(dato) {
        console.log("La suma multiplicada por dos es:", (dato * 2));
    })
);

// Imprimiendo en consola con callback
