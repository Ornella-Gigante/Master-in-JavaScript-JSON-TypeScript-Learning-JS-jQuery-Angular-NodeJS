
// Creación del objeto bicicleta 
var bicicleta = {

    // Creación de atributos 

    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima:'60km/h',



    //Metodo de cambio de color 

    cambiaColor: function(nuevo_color){
        this.color = nuevo_color; 
        console.log(this);
    }

};

//Cambio de color llamando al método 
// En consola el color de la bicicleta se verá a azul 

bicicleta.cambiaColor("Azul");

