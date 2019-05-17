import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-datagrid-header',
  templateUrl: './datagrid-header.component.html',
  styleUrls: ['./datagrid-header.component.styl']
})
export class DatagridHeaderComponent {

  @Input() header: any;

  @HostBinding('class.-left')
  public get isLeft(): boolean { return this.header && this.header.left; }

  @HostBinding('class.-no-border')
  public get doNotHaveBorder(): boolean { return this.header && this.header.noBorder; }

  @HostBinding('style.flex')
  public get flexSize(): number { return this.header.size; }

  constructor() { }

}
