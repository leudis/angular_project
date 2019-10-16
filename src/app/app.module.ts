import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './_components/listado/listado.component';
import { PadreListadoComponent } from './_components/padre-listado/padre-listado.component';

@NgModule({
  declarations: [
    PadreListadoComponent,
    AppComponent,
    ListadoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
