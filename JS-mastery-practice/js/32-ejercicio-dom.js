'use strict'

window.addEventListener('load', function() {
	console.log("DOM cargado!");

	var formulario = document.querySelector("#formulario");
	var box_dashed = document.querySelector(".dashed");
	box_dashed.style.display = "none"; 

	formulario.addEventListener('submit', function() {
		console.log("Evento submit capturado");

		// Obtener los valores ingresados por el usuario
		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value; 
		var edad = parseInt(document.querySelector("#edad").value);



		// Validacion del formulario 
		// Si no cumple la condición, devuelve mensaje de error 
		// SE creará un mensaje personalizado de error 

		if(nombre.trim() == null || nombre.trim().length == 0){
			alert("Nombre no válido");
			document.querySelector("#error_nombre").innerHTML = "El nombre no es válido"; 
			return false;
		}

		if(apellidos.trim() == null || apellidos.trim().length == 0){
			alert("Apellidos no válidos");
			return false;
		}


		if(edad == null || edad <= 0 || isNaN(edad)){
			alert("Edad no válida");
			return false;
		}

		// Mostrar la caja "dashed"
		box_dashed.style.display = "block"; 

		// Limpiar el contenido de la caja antes de agregar nuevos datos
		box_dashed.innerHTML = '<h3>Información del usuario</h3><hr>';

		// Datos del usuario y sus etiquetas
		var etiquetas = ["Nombre: ", "Apellidos: ", "Edad: "];
		var datos_usuario = [nombre, apellidos, edad];

		// Usar un bucle for para agregar las etiquetas y los valores
		for (var i = 0; i < datos_usuario.length; i++) {
			var parrafo = document.createElement("p");
			parrafo.append(etiquetas[i] + datos_usuario[i]);
			box_dashed.append(parrafo);
		}
	});
});