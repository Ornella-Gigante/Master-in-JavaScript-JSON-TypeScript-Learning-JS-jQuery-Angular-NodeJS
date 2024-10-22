'use strict'

// Espera a que la página cargue completamente
window.addEventListener('load', () => {

    // Seleccionamos el botón por su id
    var boton = document.querySelector("#boton");

    // Función que cambia de color
    function cambiarColor() {
        console.log("¡Me has clickeado!");
        var bg = boton.style.background;
        if (bg === "green") {
            boton.style.background = "red";
        } else {
            boton.style.background = "green";
        }

        // Cambiando un poco el estilo de los botones
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
    }

    // Evento de clic en el botón
    boton.addEventListener('click', function () {
        cambiarColor();
    });

    // Evento cuando el mouse pasa sobre el botón
    boton.addEventListener('mouseover', function () {
        boton.style.background = "#ccc";
    });

    // Evento cuando el mouse sale del botón
    boton.addEventListener('mouseout', function () {
        boton.style.background = "purple";
    });

    // Capturamos el input de texto
    var input = document.querySelector("#campo_nombre");

    // Evento focus (cuando el input recibe el foco)
    input.addEventListener('focus', function () {
        console.log("[focus] Estás dentro del input");
    });

    // Evento blur (cuando el input pierde el foco)
    input.addEventListener('blur', function () {
        console.log("[blur] Estás fuera del input");
    });

    // Evento keydown (cuando se presiona una tecla)
    input.addEventListener('keydown', function (event) {
        console.log("[keydown] Pulsando esta tecla", String.fromCharCode(event.keyCode));
    });

    // Evento keypress (cuando se mantiene presionada una tecla)
    input.addEventListener('keypress', function (event) {
        console.log("[keypress] Tecla presionada", String.fromCharCode(event.keyCode));
    });

    // Evento keyup (cuando se suelta una tecla)
    input.addEventListener('keyup', function (event) {
        console.log("[keyup] Tecla soltada", String.fromCharCode(event.keyCode));
    });
});
