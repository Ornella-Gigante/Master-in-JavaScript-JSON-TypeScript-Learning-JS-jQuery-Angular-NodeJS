'use strict'

$(document).ready(function() {


    var caja = $("#caja");
    
    //EFECTO SHOW
    $("#mostrar").click(function() {
        // Muestra el elemento con un efecto de desvanecimiento rápido
        caja.fadeTo('slow', 0.8);
    });

    //EFECTO HIDE
    $("#ocultar").click(function() {
        // Oculta el elemento con un efecto de desvanecimiento normal
        caja.fadeOut('normal');
    });


    $("#todoEnUno").click(function(){
        caja.fadeToggle('fast'); 

    });


   // ANIMACIÓN
$("#animar").click(function() {
    $("#caja").animate({
        marginLeft: '500px',
        fontSize: '40px',
        height: '110px',
    }, 'slow').animate({
        borderRadius: '900px',
        marginTop: '80px'
    }, 'slow').animate({
        borderRadius: '0px',
        marginLeft: '0px'
    }, 'slow').animate({
        borderRadius: '100px',
        marginLeft: '0px'
    }, 'slow').animate({
        // Estado inicial
        borderRadius: '0px',
        fontSize: '16px',
        height: '50px',
        marginTop: '0px'
    }, 'slow');
});
});
