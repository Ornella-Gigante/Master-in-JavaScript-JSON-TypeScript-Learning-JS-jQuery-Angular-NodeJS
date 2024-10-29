'use strict'

// Fetch y peticiones a servicios / apis rest 

// Fetch es un sustituto moderno de Ajax

var usuarios = []; 

// Capturando el id de la etiqueta html a usar 

var div_usuarios = document.querySelector("#usuarios");

fetch('https://reqres.in/api/users?page=2') // recibe una URL (promesa) 
    .then(data => data.json()) //función callback que convierte un objeto a JSON 
    .then(users => {

          usuarios = users.data; 
          console.log(usuarios);



    
          // Iterar sobre los usuarios y crear una lista 
          // Se usará .map() que crea un nuevo arreglo/ lista por sobre el anterior donde se trabaja 

            usuarios.map((user,i) => {
                let nombre = document.createElement('h2');

                nombre.innerHTML = i + "-" +user.first_name + " " + user.last_name;

                div_usuarios.appendChild(nombre);

                // Poner el mensaje de "Cargando..." los segundos que tardan en renderizar los nombres de la lista 
                document.querySelector(".loading").style.display = "none";
            } );

    });








