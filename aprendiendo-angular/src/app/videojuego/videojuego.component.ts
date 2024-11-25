// COMPONENTE HIJO 

import { Component } from "@angular/core";

@Component({
  selector: 'videojuego',
  template: `
    <h2>Componente de Videojuegos</h2>
    <ul>
      <li>GTA</li>
      <li>Prince of Persia</li>
      <li>Tekken</li>
      <li>Mario</li>
    </ul>
  `,
  standalone: true  // Añade esta línea
})
export class VideojuegoComponent {
  constructor() {
    console.log("Se ha cargado el componente: videojuego.component.ts");
  }
}