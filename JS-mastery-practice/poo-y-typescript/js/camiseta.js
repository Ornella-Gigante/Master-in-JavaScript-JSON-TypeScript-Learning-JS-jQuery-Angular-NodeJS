// PRACTICANDO POO CON TS
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// CREACIÓN DE CLASE HIJA 
// Para heredar se utiliza EXTENDS 
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Métodos set
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    // Método get 
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
//INSTANCIA DE OBJETO 
var camiseta = new Camiseta("violeta", "manga larga", "Adidas", "XL", 100);
console.log(camiseta);
var sudadera_nike = new Sudadera("negro", "manga larga", "Nike", "L", 300);
//SE le agrega la capucha 
sudadera_nike.setCapucha(true);
//Cambiando color de clase hiaj usando metodo heredado 
sudadera_nike.setColor("Naranja");
console.log(sudadera_nike);
