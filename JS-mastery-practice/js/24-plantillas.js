
'use strict'

var nombre = prompt("NOMBRE");
var apellidos = prompt("APELLIDOS");
var texto = "Mi nombre es:" + nombre + "<br/> Y mis apellidos son: " + apellidos;


// Uso de texto multilinea con `` 
// Se imprime la variable dentro de la plantilla con ${} 
// Se aplica HTML 

var texto = `

    <h1>Hola que tal</h1>
    <h3>MI nombre es  ${nombre}</h3>
    <h3>Mis apellidos son ${apellidos}</h3>

`;

// Se usa el objeto document y el método write 

document.write(texto);
