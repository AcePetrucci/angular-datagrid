import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DatagridComponent } from './components/datagrid/datagrid.component';
import { DatagridCellComponent } from './components/datagrid/datagrid-cell/datagrid-cell.component';
import { DatagridBodyComponent } from './components/datagrid/datagrid-body/datagrid-body.component';
import { DatagridHeaderComponent } from './components/datagrid/datagrid-header/datagrid-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    DatagridComponent,
    DatagridBodyComponent,
    DatagridCellComponent,
    DatagridHeaderComponent,
  ],
  exports: [
    CommonModule,
    RouterModule,
    DatagridComponent,
    DatagridBodyComponent,
    DatagridCellComponent,
    DatagridHeaderComponent,
  ],
})

export class SharedModule { }
