import { Component } from '@angular/core';

@Component({
  selector: 'cursos',
  imports: [],
  templateUrl: './cursos.component.html',
  standalone: true
})
export class CursosComponent {

     //defniendo propiedades de la clase públicas 
     public title: string;
     public list:string;
 
   constructor() {
     this.title = "Componente de cursos más populares";
     this.list = "Lista de cursos";
 
     console.log("Se ha cargado el componente: cursos.component.ts");
   }

}
