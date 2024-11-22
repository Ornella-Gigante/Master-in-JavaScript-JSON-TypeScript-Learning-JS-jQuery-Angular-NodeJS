// PRACTICANDO POO CON TS
// CREACIÓN DE LA CLASE
var Camiseta = /** @class */ (function () {
    // Métodos (acciones del objeto)
    // Constructor 
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio;
    }
    // Método para cambiar color 
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    // Método para aplicar el color 
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
// Crear instancia de Camiseta
var camiseta = new Camiseta("negro", "manga larga", "Nike", "XL", 13);
camiseta.setColor("Rojo"); //cambiar color 
// Crear otra instancia de Camiseta
var playera = new Camiseta("violeta", "manga corta", "Adidas", "XL", 12);
playera.setColor("Azul");
// Mostrar ambas instancias
console.log(camiseta);
console.log(playera);
