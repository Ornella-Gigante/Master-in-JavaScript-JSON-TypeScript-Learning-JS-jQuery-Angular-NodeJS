// COMPONENTE PRINCIPAL


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  standalone: true,
  imports: [RouterOutlet, VideojuegoComponent, ZapatillasComponent, CursosComponent, CommonModule]  
})
export class AppComponent {
  title = 'Master of JavaScript, TypeScript and Angular';
  public mostrar_videojuegos: boolean = true;


  // Metodo que permite ocultar valor d ela propiedad 

  ocultarVideoJuegos(value){
    this.mostrar_videojuegos = value; 
  }
}


