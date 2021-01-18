import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario: ContactoUsuario;
  public show_data;
  
  constructor() { 
    this.usuario = new ContactoUsuario('','','','')
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    this.show_data = this.usuario;
    console.log(this.show_data);
    // form.reset();
  }
}
