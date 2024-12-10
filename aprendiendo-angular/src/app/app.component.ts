import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Configuracion } from './model/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, CommonModule]
})
export class AppComponent {
  title = 'Master of JavaScript, TypeScript and Angular';
  public mostrar_videojuegos: boolean = true;
  public descripcion: string;
  public config;

  constructor() {
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion;
  }

  ocultarVideoJuegos(value: boolean): void {
    this.mostrar_videojuegos = value;
  }
}