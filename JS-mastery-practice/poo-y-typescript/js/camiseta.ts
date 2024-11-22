// PRACTICANDO POO CON TS

// CREACIÓN DE LA CLASE
class Camiseta {
    // Propiedades (características del objeto)
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;
  
    // Métodos (acciones del objeto)

        // Método para cambiar color 

    public setColor(color){
        this.color = color;

    }

        // Método para aplicar el color 

    public getColor(){
        return this.color
    }

  }
  
  // Crear instancia de Camiseta
  var camiseta = new Camiseta();
  
  camiseta.setColor("Rojo"); //cambiar color 
 

  
  // Crear otra instancia de Camiseta
  var playera = new Camiseta();
  
  playera.setColor("Azul"); 
 
  
  // Mostrar ambas instancias
  console.log(camiseta, playera);
  