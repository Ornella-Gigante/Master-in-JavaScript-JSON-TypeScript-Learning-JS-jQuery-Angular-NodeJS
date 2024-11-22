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
        this.marca = marca;
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
