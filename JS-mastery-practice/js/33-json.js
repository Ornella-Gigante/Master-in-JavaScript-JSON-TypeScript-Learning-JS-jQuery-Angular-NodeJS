'use strict'

// JSON  - Javascript Object Notation 
// NO hay arrays asociativos 
// Se almacena info y se puede convertir fácilemnete 
// Se puede enviar y recibir datos de manera sencilla 

// Objeto JSON 


var pelicula = {

    titulo: "Wonderwoman",
    año: "1999",
    país:"Estados Unidos",

};


// Creando un array de películas
// Dentro del array se pueden ir creando objetos 
// Se convertirá en uan colección de objetos 


var peliculas = [

    { titulo: "La verdad duele", año:"2016" , pais:"Francia"},
    { titulo: "Crónicas de una muerte anunciada" , año:"2000", pais:"Estados Unidos"},
    pelicula

];

// Recorrer el array por sus indices 

var caja_peliculas = document.querySelector("#peliculas");
var index; 
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + "-" + peliculas[index].año);
    caja_peliculas.append(p);
};


console.log(peliculas);