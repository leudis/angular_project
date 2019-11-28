import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngDataGridComponent } from './ang-data-grid.component';

describe('AngDataGridComponent', () => {
  let component: AngDataGridComponent;
  let fixture: ComponentFixture<AngDataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngDataGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
