import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-padre-listado',
  templateUrl: './padre-listado.component.html',
  styleUrls: ['./padre-listado.component.scss']
})

export class PadreListadoComponent implements OnInit {
  constructor(private router: Router) {
  }
  invocar() {
    this.router.navigate(['listado']);
  }

  ngOnInit() {

  }

}
