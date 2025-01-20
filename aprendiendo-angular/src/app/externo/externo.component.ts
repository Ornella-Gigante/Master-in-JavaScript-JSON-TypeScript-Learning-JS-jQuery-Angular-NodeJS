import { Component, OnInit, Pipe } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';
import { CommonModule } from '@angular/common';
import { CalculadoraPipe } from '../pipes/calculadora.pipe';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  imports: [CommonModule, CalculadoraPipe]
})
export class ExternoComponent implements OnInit {
  public user: any = null; // Almacena los datos del usuario
  public userId: string = ''; // ID del usuario ingresado
  public isLoading: boolean = false; // Indicador de carga
  public fecha: any; 

  constructor(private _peticionesService: PeticionesService) {}

  ngOnInit() {
    this.fecha = new Date();
    console.log('Componente Externo inicializado');
  }

  // Método para cargar un usuario a partir del ID ingresado
  cargaUsuario() {
    if (!this.userId) {
      console.warn('Por favor, ingresa un ID de usuario válido');
      return;
    }

    this.isLoading = true; // Activar indicador de carga
    this.user = null; // Limpiar datos previos

    this._peticionesService.getUserById(this.userId).subscribe({
      next: (result) => {
        console.log('Datos completos del usuario:', result);
        if (result && result.data) {
          this.user = result.data; // Asigna la respuesta al objeto `user`
          console.log('Datos del usuario cargados:', this.user);
        } else {
          console.error('No se encontraron datos para el usuario');
        }
      },
      error: (error) => {
        console.error('Error al cargar el usuario:', error);
      },
      complete: () => {
        this.isLoading = false; // Desactivar indicador de carga
        console.log('¡Carga de usuario completada!');
      }
    });
  }

  // Método para actualizar el ID del usuario al escribir en el campo de texto
  onUserIdChange(event: any) {
    this.userId = event.target.value;
  }
}
