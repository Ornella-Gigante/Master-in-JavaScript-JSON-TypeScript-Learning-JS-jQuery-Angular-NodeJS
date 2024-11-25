import { Component } from "@angular/core";


@Component({

    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    standalone: true 

})


export class ZapatillasComponent{

    public title: string = "Componente de Zapatillas"; 
    public list: string = "Lista de marcas populares de zapatillas";

    constructor() {
        this.title = "Componente de zapatillas"; 
        this.list = "Lista de zapatillas"
        
       
    
        console.log("Se ha cargado el componente: zapatillas.component.ts");
      }
    
}