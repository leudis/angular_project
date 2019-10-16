import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PadreListadoComponent } from './_components/padre-listado/padre-listado.component';
import { ListadoComponent } from './_components/listado/listado.component';


const routes: Routes = [ 
  {path: 'parent', component: PadreListadoComponent,},
  {path: 'listado', component: ListadoComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
