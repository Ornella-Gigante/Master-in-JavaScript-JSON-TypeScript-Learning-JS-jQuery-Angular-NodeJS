import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../model/contacto.usuario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  imports: [FormsModule]
})
export class ContactoComponent implements OnInit{
  public usuario: ContactoUsuario;

  constructor() {
    this.usuario = new ContactoUsuario('', '', '', '');
  }
  

  ngOnInit(): void {
      
  }

  //Definiendo la clase del componente 

  onSubmit(){
    console.log("Evento Submit lanzado");
    //Para ver a través de herramientas desarrollador los datos del valor insertado por usuario
    console.log(this.usuario)
  }

}
