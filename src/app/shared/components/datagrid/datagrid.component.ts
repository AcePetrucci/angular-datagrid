import { Component, Input } from '@angular/core';

import { OnChange } from 'property-watch-decorator';

import { Datagrid } from 'src/app/shared/models/datagrid.model';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.styl']
})
export class DatagridComponent {

  @OnChange(function() {
    this.clonedDatasource = { ...this.datasource };
  })
  @Input() datasource: Datagrid;

  clonedDatasource: Datagrid;

  constructor() { }

  toggleColumns(header) {
    header.toggleTargets.map(target => {
      const foundHeader = this.clonedDatasource.header.find(column => column.name === target)
      foundHeader.visible = !foundHeader.visible;

      this.clonedDatasource.content.map(column => {
        const rightCol = column.find(col => col.name === target);
        rightCol.visible = !rightCol.visible;
      })
    })

    header.visible = !header.visible;
    this.clonedDatasource.content.map(column => {
      const rightCol = column.find(col => col.name === header.name);
      rightCol.visible = !rightCol.visible;
    })
  }

}
