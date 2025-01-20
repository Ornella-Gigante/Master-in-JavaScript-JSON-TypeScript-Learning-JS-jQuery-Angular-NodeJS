import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../model/contacto.usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit{
  public usuario: ContactoUsuario;

  constructor() {
    this.usuario = new ContactoUsuario('', '', '', '');
  }
  

  ngOnInit(): void {
      
  }

}
