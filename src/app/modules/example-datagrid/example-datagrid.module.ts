import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleDatagridRoutingModule } from './example-datagrid-routing.module';
import { ExampleDatagridComponent } from './example-datagrid.component';

import { ExampleDatagridService } from './services/example-datagrid.service';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ExampleDatagridComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExampleDatagridRoutingModule,
  ],
  providers: [
    ExampleDatagridService,
  ]
})
export class ExampleDatagridModule { }
