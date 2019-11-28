import { Component, OnInit, ViewChild} from '@angular/core';
import { DatosService } from '../../_services/datos.service';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-ang-data-grid',
  templateUrl: './ang-data-grid.component.html',
  styleUrls: ['./ang-data-grid.component.scss'],
})
export class AngDataGridComponent implements OnInit {
  rowData = [];
  @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;
  constructor(private datos_service: DatosService) { }

  ngOnInit() {
    this.datos_service.libro("").subscribe(
      resultado => {

          this.rowData = resultado.body;

      }
    );
  }

  columnDefs = [
    {headerName: 'User ID', field: 'userId', sortable: true, filter: true },
    {headerName: 'ID', field: 'id', sortable: true, filter: true, checkboxSelection: true  },
    {headerName: 'Title', field: 'title', sortable: true, filter: true},
    {headerName: 'Completed', field: 'completed', sortable: true, filter: true},
];

getSelectedRows() {
  const selectedNodes = this.agGrid.api.getSelectedNodes();
  console.dir(selectedNodes);
  const selectedData = selectedNodes.map( node => node.data );
  const selectedDataStringPresentation = selectedData.map(node => node.id + ' ' + node.title + ' ' + node.completed).join(', ');
  alert(`Selected nodes: ${selectedDataStringPresentation}`);
}

onGridReady(params) {
  this.agGrid = params;
  console.log("ready");
}

}
