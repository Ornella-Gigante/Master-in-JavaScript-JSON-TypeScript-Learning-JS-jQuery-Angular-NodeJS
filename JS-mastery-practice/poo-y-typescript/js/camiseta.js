// PRACTICANDO POO CON TS
// CREACIÓN DE LA CLASE
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    // Métodos (acciones del objeto)
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
var camiseta = new Camiseta();
camiseta.setColor("Rojo"); //cambiar color 
// Crear otra instancia de Camiseta
var playera = new Camiseta();
playera.setColor("Azul");
// Mostrar ambas instancias
console.log(camiseta, playera);
