import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  listado_array = [1,2,3,4];
  datos: any[];
  show: boolean;
  mensaje_show: boolean;

  constructor(private router: Router) {
    this.show = true;
    this.mensaje_show = true;
  }

  ngOnInit() {

  }

  desplegarMensaje() {
    if(this.show){
    this.datos = [ {id: 1, nombre: 'Juan Perez', direccion: 'Solis 2020', telefono: '24109920'},
    {id: 2, nombre: 'Ester Gomez', direccion: 'San Jose 1020', telefono: '29233333'},
    {id: 3, nombre: 'Esteban Rodriguez', direccion: 'Cerrito 123', telefono: '29233311'}]
    }
    else{
      this.datos = [];
    }
    this.show = !this.show;
  }

  invocar_padre_listado(){
    this.router.navigate(['parent']);
  }

  mostrar_mensaje(){
    this.mensaje_show = !this.mensaje_show;
  }

}
