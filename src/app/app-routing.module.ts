import { ListItemComponent } from './_components/list-item/list-item.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PadreListadoComponent } from './_components/padre-listado/padre-listado.component';
import { ListadoComponent } from './_components/listado/listado.component';
import { AngDataGridComponent } from './_components/ang-data-grid/ang-data-grid.component';


const routes: Routes = [ 
  {path: 'parent', component: PadreListadoComponent,},
  {path: 'listado', component: ListadoComponent,},
  {path: 'itemlistado', component: ListItemComponent,},
  {path: 'datagrid', component: AngDataGridComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
