import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css']
})
export class ExternoComponent implements OnInit {

  public user:any; 

  constructor(private _peticionesService: PeticionesService) {}

  ngOnInit() {
    console.log('ngOnInit ejecutado'); // Verifica que el componente se inicializa

    this._peticionesService.getUser().subscribe({
      next: (result) => {
        this.user = result.data; // Muestra los datos recibidos en consola
      },
      error: (error) => {
        console.error('Error HTTP:', error); // Maneja errores HTTP
      },
      complete: () => {
        console.log('¡Observable completado!'); // Indica que la solicitud ha finalizado
      }
    });
  }
}
