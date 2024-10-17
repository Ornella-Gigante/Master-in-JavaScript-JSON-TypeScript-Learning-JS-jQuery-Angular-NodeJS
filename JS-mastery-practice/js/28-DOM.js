'use strict'

// DOM = Document Object Model 

// Se definirá una función que modificará el color 
// Cuando esta función se llame en consola de index.html, se podrá modificar al color que uno desee 

function cambiaColor(color){
    caja.style.background = color; 
}

// getElementByID solo selecciona con IDs 
//var caja = document.getElementById("micaja");

// .querySelector() selecciona desd cualquier cosa : atributo, clase, estilo, etc (+flexible que getElementById)

var caja = document.querySelector("#micaja"); // # para elementos con ID 
                                              // sin # para el nombre de la etiqueta 
                                              // . para seleccionar una clase 

// Uso de la propiedad innerHTML para modificar elementos dentro de HTML sin tener que interavtiuar con divcho HTML 
// Esta propiedad modifica el HTML desde un fichero js 

caja.innerHTML = "Texto en la caja desde JS"

//Uso de la propiedad style para modificar el estylo del HTML 

caja.style.background = "red"; 
caja.style.padding = "20px";
caja.style.color = "white";


// Agregando propiedades desde fichero js 
// Esto se agregará a HTML de manera automaática al ejecutar 

caja.style.color = "white"; 
caja.className = "hola"; 

console.log(caja); 


// Buscar todos los divs en el HTML 




// Conseguir elementos a través de un ID completo 









// Conseguir elementos por su etiqueta 



var todosLosDivs = document.getElementsByTagName('div');

var sacarContenido = todosLosDivs[2].textContent; // sacar el contenido de los divs 

console.log(sacarContenido);

console.log(todosLosDivs);

// Modificar un valor del div 

var modificarContenido = todosLosDivs[2];
modificarContenido.innerHTML = "Otro texto para el segundo elemento";  //aparecerea en el HTML no en consola 


// Recorrer los elementos en modo lista 

var todosLosDivs = document.getElementsByTagName('div'); 


//Creando una elemento hr desde fichero .js a html 
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");



var valor;
for(valor in todosLosDivs){

    // Comprobar si es un elemento del DOM 
    // prepend() inserta uno o mas nodos AL PRINCIPIO de un elemento padre 
    // append() inserta uno o mas nodos AL FINAL de un elemento padre 

    if( typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent); 
        parrafo.append(texto)
        seccion.append(parrafo);
      
      
    }
  

};


// CReando linea divisoria al final 

seccion.append(hr);


// Conseguir elementos por su clase css 


var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background='purple';
var div; 
for( div in divsRojos){

    if(divsRojos[div].className == "rojo"){

        divsRojos[div].style.background = "red";
    }
    
}


// Query selector 

var id = document.querySelector("#encabezado");
console.log(id);


