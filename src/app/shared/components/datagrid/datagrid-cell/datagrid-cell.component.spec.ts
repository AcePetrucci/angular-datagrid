import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridCellComponent } from './datagrid-cell.component';

describe('DatagridCellComponent', () => {
  let component: DatagridCellComponent;
  let fixture: ComponentFixture<DatagridCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagridCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
