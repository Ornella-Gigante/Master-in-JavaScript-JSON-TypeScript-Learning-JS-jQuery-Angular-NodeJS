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

        // Constructor 

        constructor(color, modelo, marca, talla, precio){
            this.color = color; 
            this.modelo = modelo; 
            this.talla = talla; 
            this.precio = precio; 
        }

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
  var camiseta = new Camiseta("negro", "manga larga", "Nike", "XL", 13);
  
  camiseta.setColor("Rojo"); //cambiar color 
 

  
  // Crear otra instancia de Camiseta
  var playera = new Camiseta("violeta", "manga corta", "Adidas", "XL", 12);
  
  playera.setColor("Azul"); 
 
  
  // Mostrar ambas instancias
  console.log(camiseta);
  console.log(playera);
  