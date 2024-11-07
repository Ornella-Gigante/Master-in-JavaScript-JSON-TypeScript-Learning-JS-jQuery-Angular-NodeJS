'use strict'

$(document).ready(function(){
    // FUNCION LOAD
    // Recoge la lista de usuarios de reqres.in
    // $("#datos").load("https://reqres.in/api/users");
    
    // METODO GET Y POST
    // Obtiene un usuario específico (en este caso el usuario con ID 1)
    $.get("https://reqres.in/api/users/1", function(response){

              // Accede directamente a la propiedad 'data' de la respuesta
            const userData = response.data;
            $("#datos").append("<p>"+userData.first_name + "" + "<p>" + userData.last_name);

            
        
    });

    // Uso de parametros de consulta
    // page = numero de pagina 
    // per_page = cantidad de resultados que se quieren sacar por página (3 users) 
    $.get("https://reqres.in/api/users", {
        page: 3,
        per_page: 3
    }, function(response){
        console.log(response);
    });


    

    //METODO POST 

  
    $("#formulario").submit(function(e){


        // No redigirá a la pagina web de este modo 

        e.preventDefault(); 

        // Se crea una variable usuario que luego se meterá en el post 

        var usuario = {

        name : $('input[name = "name"]').val(),
        web : $('input[name = "web"]').val()

    };



        $.post($(this).attr("action"), usuario , function(response){

            console.log(response);


    }).done(function(){

        alert("Usuario registrado correctamente");

    });


     return false; 


    });




});