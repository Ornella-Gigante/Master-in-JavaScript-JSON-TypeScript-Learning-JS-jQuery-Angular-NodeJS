import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'cursos',
  imports: [],
  templateUrl: './cursos.component.html',
  standalone: true
})
export class CursosComponent implements OnInit{


  public title:string;
  public list:string;

     

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
      console.log(params);
    })
  }
}