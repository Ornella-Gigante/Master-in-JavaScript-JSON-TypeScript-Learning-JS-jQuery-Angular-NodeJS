import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../model/zapatilla";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@Component({

    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    standalone: true,
    imports: [CommonModule, FormsModule] 

})


export class ZapatillasComponent implements OnInit{

    public title: string = "Componente de Zapatillas"; 
    public list: string = "Lista de marcas populares de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas:String[] = []; 
    public color: String; 
    public mi_marca: string;

    constructor() {
        this.color = 'blue'; 
        this.marcas = new Array(); 
        this.title = "Componente de zapatillas"; 
        this.list = "Lista de zapatillas"
        this.mi_marca= "Tacones";
        this.zapatillas = [
            new Zapatilla("Zapatos de salir 2.0", "Nike", "Violeta", 240, true),
            new Zapatilla("Cowboy", "Avocado", "Blanco", 400, true),
            new Zapatilla("Tacones", "Gucci", "Negro", 200, true),
            new Zapatilla("Botas góticas", "Mango", "Negro", 200, false),
        ];
        
        console.log("Se ha cargado el componente: zapatillas.component.ts");
      }

      ngOnInit() {

        console.log(this.zapatillas);
        this.getMarcas();
          
      }

      // Se recorrerá la colección de objetos 
      getMarcas(){
        this.zapatillas.forEach((zapatilla,index)=>{

          this.marcas.push(zapatilla.marca);

        });

        console.log(this.marcas); 
      }


      getMarca(){
        alert(this.mi_marca);
      }


      // Se añadirán marcas de manera reactiva desde el html 
      addMarca(){
        this.marcas.push(this.mi_marca);
      }

      // Método para borrar marca 
      // Se utiliza splice() para borrar el indice de manera automática 
      // (index,1) = borrar index, solo 1 elemento 
      
      borrarMarca(index : number){

        this.marcas.splice(index,1);
          
    
}

}