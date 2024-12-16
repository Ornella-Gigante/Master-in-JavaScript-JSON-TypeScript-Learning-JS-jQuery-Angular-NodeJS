import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public identificado: boolean; 


  constructor(){
    this.identificado  = false; 
  }

  ngOnInit(){

  }

// Creación del método para identificarse 

setIdentificado(){
  this.identificado = true; 
}


  // Método para desactivar la identificación
  unsetIdentificado() {
    this.identificado = false;
  }
}