'use strict'


//Parámetros REST y SPREAD 

/**
 * Se usan parámetros REST = "...resto_de_frutas" 
 * @param {*} fruta1 
 * @param {*} fruta2 
 */

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(...resto_de_frutas);

}


listadoFrutas("manzana", "naranja", "pera", "melon", "coco");


/**
 * PARAMETRO SPREAD = elementos de un arreglo (en este caso lista) + elementos  
 * Se puede tener una colección de un listado de elementos de un array y pasárselo a un parámetro de tipo SPREAD y rednerizarlo 
 */

var frutas = ["Naranja", "Manzana", "Pera"];
listadoFrutas(...frutas, "Sandia", "Pera", "Melón", "Aguacate");