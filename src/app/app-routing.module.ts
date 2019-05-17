import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'example-datagrid', pathMatch: 'full' },
  { path: 'example-datagrid', loadChildren: './modules/example-datagrid/example-datagrid.module#ExampleDatagridModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
