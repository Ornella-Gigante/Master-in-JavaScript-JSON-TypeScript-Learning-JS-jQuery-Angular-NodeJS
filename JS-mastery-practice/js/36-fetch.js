'use strict'

// Fetch y peticiones a servicios / apis rest 



// Capturando el id de la etiqueta html a usar 

var div_usuarios = document.querySelector("#usuarios");


// Capturando el id del profesor a cargar 


var div_profesor = document.querySelector("#profesor");

// Creando el selector de janet 

var div_janet = document.querySelector("#janet");

getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data); 
        return getInfo();
    })
    .then(data => {
        
        div_profesor.innerHTML = data;
        return getJanet();
    })
    .then(data => data.json())
    .then(janet => {
        mostrarJanet(janet.data);
    })
    .catch(error => {
        console.error("Ocurrió un error:", error);
    });


// Se encapsulará el fetch 

function getUsuarios(){

    return fetch('https://reqres.in/api/users') // recibe una URL (promesa) 

}

//Función que pillará al usuario 2 = Janet 

function getJanet(){

    return fetch('https://reqres.in/api/users/2') // recibe una URL (promesa) 

}


//Creación de una promesa desde 0 

function getInfo() {
    var profesor = {
        nombre: 'Victor',
        apellidos: 'Robles',
        url: 'https://victorroblesweb.es'
    };
    // Creación de una nueva promesa
    return new Promise((resolve, reject) => {
        var profesor_string = JSON.stringify(profesor);

        // Simula una operación asincrónica con setTimeout
        setTimeout(function () {
            // Resuelve la promesa con el valor de profesor_string
            if (profesor_string) {
                resolve(profesor_string);
            } else {
                reject('Error: profesor_string es inválido');
            }
        }, 3000);
    });
}


// Se encapsulará la lista de usuarios 
function listadoUsuarios(usuarios){

          // Iterar sobre los usuarios y crear una lista 
          // Se usará .map() que crea un nuevo arreglo/ lista por sobre el anterior donde se trabaja 

          usuarios.map((user,i) => {
            let nombre = document.createElement('h2');

            nombre.innerHTML = i + "-" +user.first_name + " " + user.last_name;

            div_usuarios.appendChild(nombre);

            // Poner el mensaje de "Cargando..." los segundos que tardan en renderizar los nombres de la lista 
            document.querySelector(".loading").style.display = "none";
        } );
}


// Mostrar a janet (método)

function mostrarJanet(user){

    // Iterar sobre los usuarios y crear una lista 
  
      let nombre = document.createElement('h2');

    // Iterar sobre los avatares relacionados con el usuario 
      let avatar = document.createElement('img');

      nombre.innerHTML = "-" +user.first_name + " " + user.last_name;

      avatar.src = user.avatar;

      avatar.style.width = '100px'; // para usar el px debe estar acompañado de .style 

                                    // si lo quiero sin style , deberia ser avatar.width = '100' 
      

      div_janet.appendChild(nombre);
      div_janet.appendChild(avatar);

      // Poner el mensaje de "Cargando..." los segundos que tardan en renderizar los nombres de la lista 
      document.querySelector("#janet .loading").style.display = "none";
 

} 








