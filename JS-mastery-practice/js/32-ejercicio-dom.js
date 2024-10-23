'use strict'


// Mensaje que dará a la consola cuando la pçagina se cargue correctamente 

window.addEventListener('load', function(){

	console.log("DOM cargado!");

	//Capturar el formulario 

	var formulario = document.querySelector("#formulario");

	//SE ocultara el box dashed si no hay data ingresada por el usuario 


	var box_dashed = document.querySelector(".dashed");
	box_dashed.style.display = "none"; 

	formulario.addEventListener('submit', function(){

		console.log("Evento submit capturado");


	// Declarando las variables del formulario 
	// Se obtienen los datos que ingresa el usuario y se pasan por consola 

		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value; 
		var edad = document.querySelector("#edad").value;


		// Mostrar la caja con la data ingresada por el usuario dentro 

		box_dashed.style.display = "block"; 


		// Se almacenarán los datos de usuario en un array 

		var datos_usuario = [nombre,apellidos,edad];


		var indice = 0;
		for(indice in datos_usuario){


			var parrafo = document.createElement("p");

			parrafo.append(datos_usuario[indice]);
			box_dashed.append(parrafo);


		};


	});


});




