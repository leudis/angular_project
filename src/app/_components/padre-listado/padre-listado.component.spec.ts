import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreListadoComponent } from './padre-listado.component';

describe('PadreListadoComponent', () => {
  let component: PadreListadoComponent;
  let fixture: ComponentFixture<PadreListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
