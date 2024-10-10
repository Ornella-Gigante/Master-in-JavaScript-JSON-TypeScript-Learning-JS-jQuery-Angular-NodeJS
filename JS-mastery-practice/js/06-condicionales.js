'use strict'

// Condicional if 

var edad1= 18; 
var edad2= 20; 
var edad= 31;
var nombre= "Ornella";
var year= 2024;

if(edad1 > edad2){

    console.log("La edad uno es mayor que la edad dos");

}else {
    console.log("La edad dos es mayor que la edad uno"); 
}

/*
OPERADORES RELACIONALES 

Mayor: >
Menor: <
Mayor o igual: >= 
Menor o igual: <= 
Igual: == 
Distinto de:  != 

*/

if(edad1 > edad2){

        console.log(nombre + " " + "es mayor de edad");
}else{
        console.log(nombre + " " +"es menor de edad");
}


//Anidado 


if(edad >= 18){

    console.log(nombre + " " +"tiene" + " " +  edad + " " + "años, es mayor de edad");

    if(edad <= 33){
        console.log("Eres millenial");
    }
}else if(edad >= 70){

        console.log("Eres anciano");

}else{
        console.log(nombre+ " " + "es menor de edad");
}


// Con &&  || y == 


if(year == 2008 || (year >= 2018 && year == 2028)){

    console.log("El año acaba en 8");

}else{
    console.log("AÑO NO REGISTRADO"); 
}




