import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../model/contacto.usuario';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { EmailValidator, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  imports: [FormsModule, CommonModule, NgClass]
})
export class ContactoComponent implements OnInit{
  public usuario: ContactoUsuario;

  constructor() {
    this.usuario = new ContactoUsuario('', '', '', '');
 

  }
  

  ngOnInit(): void {
      
  }

  //Definiendo la clase del componente 

  onSubmit(form:any){
    console.log("Evento Submit lanzado");
    //Vaciando formulario automaticamente 
    form.reset();
    //Para ver a través de herramientas desarrollador los datos del valor insertado por usuario
    console.log(this.usuario)
  }

}
