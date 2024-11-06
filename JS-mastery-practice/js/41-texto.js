'use strict'

$(document).ready(function(){

    // Se recogerá el valor de add_link
    $("#add_button").click(function(){

       // $("#menu").html('<li><a href = " '+$("#add_link").val()+' " ></a> </li>');
       //$("#menu").before('<li><a href = " '+$("#add_link").val()+' " ></a> </li>');
       // $("#menu").after('<li><a href = " '+$("#add_link").val()+' " ></a> </li>');
       // $("#menu").apped('<li><a href = " '+$("#add_link").val()+' " ></a> </li>');
        $("#menu").prepend('<li><a href = " '+$("#add_link").val()+' " ></a> </li>');
        $("#add_link").val(''); // se deja el link vacío para la próxima entrada 
        reloadLinks();
        

    });

    console.log($('a').length); // Contara los elementos de la lista


    function reloadLinks(){

        $('a').each(function(index){

            var that = $(this);
            var enlace = ($(this).attr("href"));
    
            //Modificar el enlace 
    
            that.attr('target', '_blanck'); //Al hacer click en enlace, abrirá una pestaña nueva 
            that.text(enlace); // Mostrará el enlace 
        });
    }

 

});