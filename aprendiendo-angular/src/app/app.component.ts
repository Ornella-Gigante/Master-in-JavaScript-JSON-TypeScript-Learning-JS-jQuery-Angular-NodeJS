// COMPONENTE PRINCIPAL


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  standalone: true,
  imports: [RouterOutlet, VideojuegoComponent, ZapatillasComponent, CursosComponent]  
})
export class AppComponent {
  title = 'aprendiendo-angular';
}