import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../../_services/datos.service';

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
  v: any;
  result: any;

  constructor(private router: Router, private datos_service: DatosService) {
    this.show = true;
    this.mensaje_show = true;
    //------ service ------
  }

  ngOnInit() {

  }

  listadoNombres() {
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

  libro_titulos(ciudad: string) {
    this.datos_service.libro(ciudad).subscribe(

      resultado => {
        console.log(resultado.body.forEach(e => {console.log(e.title);}));
      }
    );
}

libro_detallado(){
  this.datos_service.libro("").subscribe(
    resultado => {
      if(this.result){
        this.result = null; //set null this.result to hide all books
      }
      else{
        this.result = resultado.body;
      }
    }
  );
}


}
