// COMPONENTE HIJO 

import { Component } from "@angular/core";

@Component({
  selector: 'videojuego',
  templateUrl: `./videojuego.component.html`,
  standalone: true  
})
export class VideojuegoComponent {

    //defniendo propiedades de la clase públicas 
    public title: string;
    public listado:string;

  constructor() {
    this.title = "Componente de videojuegos"; 
    this.listado = "Listado de los juegos más populares";

    console.log("Se ha cargado el componente: videojuego.component.ts");
  }
}