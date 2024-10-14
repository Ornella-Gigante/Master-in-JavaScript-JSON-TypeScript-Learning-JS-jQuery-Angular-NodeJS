'use strict'

// Una array multidimensional es un array con muchos arrays dentro 

var categorias = ['Acción', 'Terror', 'Comedia']; 
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];
var cine = [categorias, peliculas];

console.log(cine);


// Acceder a indices de arrays específicos 

console.log(cine[0][1]); // El 0 es el número de array, el 1 es el índice del elemento del array 
console.log(cine[1][2]);



// Operaciones con arrays 


// añadir un elemento a un arrary usando .push (agregar) y .pop (eliminar ultimo elemento del array= FIN)

/**

 var elemento = ""; 
document.write("Bienvenido a su lista de películas personalizada");
document.write("Para salir, escriba -FIN-");

do{
    
    elemento = prompt("Introduce la película:");
    peliculas.push(elemento);

}while(elemento != "FIN");

//Se elimina el último elemento agregado, que sería FIN
peliculas.pop();

console.log(peliculas);  


 */


// Buscar elemento de un array con indexOf() 

var indice = peliculas.indexOf('Batman');
if(indice > -1){
    peliculas.splice(indice,1);
}

// Convertir un array a texto 
// el contenido del array se convertiría en string 

var peliculas_string = peliculas.join(); 

console.log(peliculas_string);


// Convertir un string en un array 

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);


// metodo sort() para ordenar el array 
// De manera automática lo ordena por orden alfabético 

peliculas.sort();


// Mètodo reverse() 

peliculas.reverse()


// Otra forma de recorrer un array 


var lenguajes = new Array("PHP", "JS", "Go", "Java", "C+", "C#", "C", "Pascal");

for(let elemento in lenguajes ){

    document.write("<li>" + lenguajes[elemento] +"</li>")

}

document.write("</ul>");


