import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-ejemplo',
  templateUrl: './formulario-ejemplo.component.html',
  styleUrls: ['./formulario-ejemplo.component.scss']
})
export class FormularioEjemploComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signup(){
    alert('form fields are validated successfully!');
  }

}
