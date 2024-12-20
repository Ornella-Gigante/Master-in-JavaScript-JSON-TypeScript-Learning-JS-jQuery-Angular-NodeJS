import { Injectable } from "@angular/core";
import { Zapatilla } from "../model/zapatilla";


@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla("Zapatos de salir 2.0", "Nike", "Violeta", 240, true),
            new Zapatilla("Cowboy", "Avocado", "Blanco", 400, true),
            new Zapatilla("Tacones", "Gucci", "Negro", 70, true),
            new Zapatilla("Botas góticas", "Mango", "Negro",65, false),
        ];

    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }

   

}