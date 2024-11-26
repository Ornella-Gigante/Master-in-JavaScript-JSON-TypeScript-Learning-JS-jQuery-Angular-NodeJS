// COMPONENTE HIJO 
// OnInit : Comun en Angular y tiee un metodo llado ngOnInit() que se inicia apenas se ejecita el elemento  que lo implementa 
// DoCheck: Comienza a funcionar cuando hay un cambio en el componente que lo implementa 
// OnDestroy: Se ejecutará algo antes de eliminar el componente 

import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
import { Configuracion } from "../model/configuracion";

@Component({
  selector: 'videojuego',
  templateUrl: `./videojuego.component.html`,
  standalone: true  
})
export class VideojuegoComponent implements OnInit , DoCheck, OnDestroy{

    //defniendo propiedades de la clase públicas 
    public title: string;
    public listado:string;

  constructor() {
    this.title = "Componente de videojuegos"; 
    this.listado = "Listado de los juegos más populares";

    console.log("Se ha cargado el componente: videojuego.component.ts");
  }


  //Nada más cargar el componente se carga el método

  ngOnInit() {

    console.log("OnInit ejecutado");
      
  }

   //Nada más modificar algo del Componente 

   ngDoCheck() {

    console.log("DoCheck ejecutado");
      
  }


  //Custom clean-up 

  ngOnDestroy(){

    console.log("OnDestroy ejecutado");
      
  }


  //Cambiar titulo 

  cambiarTitulo() {
    this.title = "Nuevo titulo del componente"; 
  }
}