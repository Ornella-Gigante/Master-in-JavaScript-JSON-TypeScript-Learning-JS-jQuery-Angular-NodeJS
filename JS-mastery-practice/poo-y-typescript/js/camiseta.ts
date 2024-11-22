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

        constructor(color:string, modelo:string, marca:string, talla:string, precio:number){
            this.color = color; 
            this.modelo = modelo; 
            this.talla = talla; 
            this.precio = precio; 
            this.marca = marca;
        }

        // Método para cambiar color 

    public setColor(color:string){
        this.color = color;

    }

        // Método para aplicar el color 

    public getColor(){
        return this.color
    }

  }
  

  