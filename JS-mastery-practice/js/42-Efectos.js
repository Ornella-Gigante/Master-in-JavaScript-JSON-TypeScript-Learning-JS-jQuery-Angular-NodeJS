'use strict'

$(document).ready(function() {
    
    //EFECTO SHOW
    $("#mostrar").click(function() {
        // Muestra el elemento con un efecto de desvanecimiento rápido
        $("#caja").fadeTo('slow', 0.8);
    });

    //EFECTO HIDE
    $("#ocultar").click(function() {
        // Oculta el elemento con un efecto de desvanecimiento normal
        $("#caja").fadeOut('normal');
    });


    $("#todoEnUno").click(function(){
        $("#caja").fadeToggle('fast'); 

    });
});
