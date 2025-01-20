import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Configuracion } from './model/configuracion';
import { BrowserModule } from '@angular/platform-browser';
import { Pipe} from '@angular/core';
 import { PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, CommonModule,RouterOutlet, RouterModule]
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