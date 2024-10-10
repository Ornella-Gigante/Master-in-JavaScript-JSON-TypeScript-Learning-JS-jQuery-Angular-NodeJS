'use strict'


// Bucle while 

var year = 2018; 

while(year <= 2051){
    console.log("Estamos en el año 1:" + year);

    year++;

}


// Bucle while con break 

var year = 2018; 

while(year <= 2051){
    console.log("Estamos en el año 2:" + year);

    // se mostrará de 2018 a 2000 
    if(year == 2000){
        break;
    }
    year--;
}

// También se puede hacer en decremento 


while(year <= 2051){
    console.log("Estamos en el año 3:" + year);

    year++;
}





// Do while 



var years = 20; 


do{
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years = 20; 

}while(years != 20)








