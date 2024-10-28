'use strict'


// Se creará un formulario que nos permita añadir películas 


// SE capturará el evento con SUBMIT 

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function(){

    //Confirmando que se entra a la función correctamente 

    console.log("Entrada a la función");
    
    var titulo = document.querySelector('#addpelicula').value; 

    // Verficiar que no se ingresan datos null o vacíos 
    // Si los datos no son nullos ni están vacíos, se muestran en consola 

    if(titulo.length >= 1){
        localStorage.setItem(titulo,titulo); // Guardara un titulo tras otro 
    };

});


// Mostrando los datos en html 

var ul = document.querySelector("#peliculas-list");
for (var i in localStorage){
    console.log(localStorage[i]);
    
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);

    }

}



//Borrar películas 


var formulariob = document.querySelector("#formborrarPeliculas");

formulariob.addEventListener('submit', function(){

    //Confirmando que se entra a la función correctamente 

    console.log("Entrada a la función");
    
    var titulo = document.querySelector('#borrarpelicula').value; 

    // Verficiar que no se ingresan datos null o vacíos 
    // Si los datos no son nullos ni están vacíos, se muestran en consola 

    if(titulo.length >= 1){
        localStorage.removeItem(titulo,titulo); // Guardara un titulo tras otro 
    };

});