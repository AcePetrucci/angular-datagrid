import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleDatagridComponent } from './example-datagrid.component';

export const exampleDatagridRoutes: Routes = [
  {
    path: '', component: ExampleDatagridComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(exampleDatagridRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ExampleDatagridRoutingModule { }
