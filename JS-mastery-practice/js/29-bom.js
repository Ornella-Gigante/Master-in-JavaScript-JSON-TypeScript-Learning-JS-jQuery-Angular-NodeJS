'use strict'

// BOM (Browser Object Model)



/// Función que te saca la anchura y altura de la ventana 

function getBOM(){

    // Datos de la ventana del navegador 

    console.log( "ANCHURA DEL SITIO WEB" + "=" + window.innerWidth); //anchura 

    console.log("ALTURA DEL SITO WEB" + "=" + window.innerHeight) //altura 

    console.log(window.location); // URL del archivo 


    // Datos de la ventana física del dispositivo 


    console.log("ANCHURA DE LA VENTANA DEL DISPOTIVO" + "=" + screen.width);
    console.log("ALTURA DE LA VENTANA DEL DISPOSITIVO" + "=" + screen.height);


}

// Redirección a la página 
// Ingresando una dirección web, te llevará a la ventana indicada 

function Redirect(url){

    window.location.href = url; 

}


// Función que abra una pequeña ventana del navegador 
// Abrirá una pestaña nueva desde el navegador 



function abrirVentana(url){

    window.open(url);

}


// Función que abre una ventana del navegador con una dimensión 


function abrirVentanaTamaño(url) {
    window.open(url, "", "width=400,height=300");
}



// Llamar a la función 

getBOM();