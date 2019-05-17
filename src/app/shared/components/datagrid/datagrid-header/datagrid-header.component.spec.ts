import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridHeaderComponent } from './datagrid-header.component';

describe('DatagridHeaderComponent', () => {
  let component: DatagridHeaderComponent;
  let fixture: ComponentFixture<DatagridHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagridHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
