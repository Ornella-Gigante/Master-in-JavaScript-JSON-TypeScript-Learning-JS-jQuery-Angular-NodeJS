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
  public followers!: number; 

     

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
    this._route.params.subscribe((params: Params) => {
      this.nombre = params['nombre']; // array asociativo
      this.followers = Number(params['followers']); // Convierte a número
      console.log(this.nombre);
      console.log(this.followers); // Ahora es un número
    });
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }
}