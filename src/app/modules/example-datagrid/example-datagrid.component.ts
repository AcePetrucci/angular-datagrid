import { Component } from '@angular/core';

import { ExampleDatagridService } from './services/example-datagrid.service';

@Component({
  selector: 'app-example-datagrid',
  templateUrl: './example-datagrid.component.html',
  styleUrls: ['./example-datagrid.component.styl']
})
export class ExampleDatagridComponent {

  exampleDatagridList$ = this._exampleDatagridService.getDatagridListExample();

  constructor(private _exampleDatagridService: ExampleDatagridService) { }

}
