import { Component, OnInit } from '@angular/core';
declare var NgForm:any;
@Component({
  selector: 'app-formulario-ejemplo',
  templateUrl: './formulario-ejemplo.component.html',
  styleUrls: ['./formulario-ejemplo.component.scss']
})
export class FormularioEjemploComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public user = {};
  signup(){
    alert('form fields are validated successfully!');
  }

}
