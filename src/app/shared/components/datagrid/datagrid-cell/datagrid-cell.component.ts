import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-datagrid-cell',
  templateUrl: './datagrid-cell.component.html',
  styleUrls: ['./datagrid-cell.component.styl']
})
export class DatagridCellComponent {

  @Input() content: any;

  @HostBinding('class.-left')
  public get isLeft(): boolean { return this.content && this.content.left; }

  @HostBinding('style.flex')
  public get flexSize(): number { return this.content.size; }

  constructor() { }

}
