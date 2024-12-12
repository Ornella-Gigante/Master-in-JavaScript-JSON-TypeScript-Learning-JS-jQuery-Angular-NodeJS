import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class CursosComponent implements OnInit{


  public title:string;
  public list:string;
  public nombre!: string;  // Usando '!' para asegurar que se asignará más tarde

     

  constructor(

   
    
    private _route: ActivatedRoute,

    private _router: Router
  
  
  
  ) {
    // Ahora la dependencia _route es correctamente inyectada

    this.title ="Componente de cursos más populares";
    this.list = "Lista de cursos";
  
  }

  ngOnInit() {
    // Aquí puedes acceder a _route y usarlo según sea necesario

    this._route.params.subscribe((params: Params) =>{
      //this.nombre = params.nombre; // otra opción de hacer lo mismo que en el array asociativo
      this.nombre = params['nombre']; //array asociativo
      console.log(this.nombre);
    });
  }
}