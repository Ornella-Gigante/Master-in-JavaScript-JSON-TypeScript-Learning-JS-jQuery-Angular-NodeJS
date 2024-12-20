import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../model/zapatilla";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ZapatillaService } from "../service/zapatilla.service";


@Component({

    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    standalone: true,
    imports: [CommonModule, FormsModule],
    providers: [ZapatillaService] 

})


export class ZapatillasComponent implements OnInit{

    public title: string = "Componente de Zapatillas"; 
    public list: string = "Lista de marcas populares de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas:String[] = []; 
    public color: String; 
    public mi_marca: string;

    constructor(
      private _zapatillaService: ZapatillaService
    ) {
        
        this.color = 'blue'; 
        this.marcas = new Array(); 
        this.title = "Componente de zapatillas"; 
        this.list = "Lista de zapatillas"
        this.mi_marca= "Tacones";
      
        this.zapatillas = [
      
      ];
        console.log("Se ha cargado el componente: zapatillas.component.ts");
      }

      ngOnInit() {

        this.zapatillas = this._zapatillaService.getZapatillas();
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


    // Metodo onBlur() 
    // Ejecuta acciones o validaciones hechas por el usuario
    // Se activa cuando un elemento pierde el foco (ejemplo, clickear fuera de un campo de texto)


    onBlur(){
      console.log("Has salido del input");
    }

    // Metodo del keyup() 
    // SE activa cuando se suelta una tecla después de presionarla 
    // Al soltar la tecla, saltará la alerta 

    mostrarPalabra(){
      alert(this.mi_marca);
    }
      


}