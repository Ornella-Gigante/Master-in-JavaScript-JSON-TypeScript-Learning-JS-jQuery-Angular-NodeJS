import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../model/zapatilla";
import { CommonModule } from "@angular/common";


@Component({

    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    standalone: true,
    imports: [CommonModule] 

})


export class ZapatillasComponent implements OnInit{

    public title: string = "Componente de Zapatillas"; 
    public list: string = "Lista de marcas populares de zapatillas";
    public zapatillas: Array<Zapatilla>;

    constructor() {
        this.title = "Componente de zapatillas"; 
        this.list = "Lista de zapatillas"
        this.zapatillas = [
            new Zapatilla("Zapatos de salir 2.0", "Nike", "Violeta", 240, true),
            new Zapatilla("Cowboy", "Avocado", "Blanco", 400, true),
            new Zapatilla("Tacones", "Gucci", "Negro", 200, true),
        ];
        
       
    
        console.log("Se ha cargado el componente: zapatillas.component.ts");
      }


      ngOnInit() {

        console.log(this.zapatillas);
          
      }
    
}