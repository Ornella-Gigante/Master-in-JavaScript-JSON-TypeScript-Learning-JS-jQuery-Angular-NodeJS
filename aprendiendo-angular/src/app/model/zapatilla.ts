export class Zapatilla{
    /*

    METODO CLASICO (como seria en JS)

    public nombre:string;
    public marca: string; 
    public color: string; 
    public precio: number; 
    public stock: boolean; 


    constructor(nombre, marca, color, precio, stock){

        this.nombre = nombre; 
        this.marca = marca; 
        this.color = color;
        this.precio = precio;
        this.stock = stock; 

    }

    */

    // MÉTODO MÁS MODERNO TS (TIPADO FUERTE)
    // SE DEFINE LA VARIABLE DIRECTAMENTE EN EL CONSTUCTOR, MENOS CODIGO 

    constructor(

        public nombre: string,
        public marca: string,
        public color: string, 
        public precio: number,
        public stock: boolean
     

    ){}
}