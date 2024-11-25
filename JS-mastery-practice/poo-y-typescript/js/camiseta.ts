// PRACTICANDO POO CON TS

// DEFINIENDO LA INTERFAZ 

interface CamisetaBase {
    setColor(color: string): void;
    getColor(): string;
    estampacion?: () => void; // Propiedad del decorador 
}


// Decorador 

function estampar (logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta Estampada con logo:" + logo);

        }
    }
}

// Aplicando el decorador 
// Los decoradores nunca terminan con punto y coma 
 
@estampar('Gucci')
// CREACIÓN DE LA CLASE
class Camiseta implements CamisetaBase{
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


  // CREACIÓN DE CLASE HIJA 
  // Para heredar se utiliza EXTENDS 


  class Sudadera extends Camiseta{
    public capucha: boolean;

    // Métodos set
    setCapucha(capucha: boolean){
        this.capucha = capucha;

    }

    // Método get 

    getCapucha(): boolean{
        return this.capucha; 
    }
  }


  //INSTANCIA DE OBJETO 


  var camiseta = new Camiseta("violeta", "manga larga", "Adidas", "XL", 100);
  console.log(camiseta);
  camiseta.estampacion(); 
  
  var sudadera_nike = new Sudadera("negro", "manga larga", "Nike", "L", 300); 
  //SE le agrega la capucha 
  sudadera_nike.setCapucha(true);
  //Cambiando color de clase hiaj usando metodo heredado 
  sudadera_nike.setColor("Naranja");
  console.log(sudadera_nike);
  