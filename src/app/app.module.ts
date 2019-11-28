import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
import { ListItemComponent } from './_components/list-item/list-item.component';
import { ItemComponent } from './_components/item/item.component';
import { AngDataGridComponent } from './_components/ang-data-grid/ang-data-grid.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    PadreListadoComponent,
    AppComponent,
    ListadoComponent,
    NavbarComponent,
    FormularioEjemploComponent,
    ConfirmEqualValidatorDirective,
    ListItemComponent,
    ItemComponent,
    AngDataGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, // for use HttpClient on _service
    NgbModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatosService, TimeService],
  bootstrap: [AppComponent],
})
export class AppModule { }