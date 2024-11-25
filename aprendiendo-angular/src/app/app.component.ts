// COMPONENTE PRINCIPAL


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideojuegoComponent } from './videojuego/videojuego.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //aqui es donde se va a ver el componente videojuego 
  standalone: true,
  imports: [RouterOutlet, VideojuegoComponent]  
})
export class AppComponent {
  title = 'aprendiendo-angular';
}