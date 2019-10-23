import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './_components/listado/listado.component';
import { PadreListadoComponent } from './_components/padre-listado/padre-listado.component';
import { DatosService } from './_services/datos.service';
import { TimeService } from './_services/time.service';

import { HttpClientModule } from '@angular/common/http'; //for use HttpClient on _service
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FormularioEjemploComponent } from './_components/formulario-ejemplo/formulario-ejemplo.component'
import { ConfirmEqualValidatorDirective } from './_directives/confirm-equal-validator.directive';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PadreListadoComponent,
    AppComponent,
    ListadoComponent,
    NavbarComponent,
    FormularioEjemploComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, // for use HttpClient on _service
    NgbModule.forRoot()
  ],
  providers: [DatosService, TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }