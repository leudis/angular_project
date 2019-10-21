import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEjemploComponent } from './formulario-ejemplo.component';

describe('FormularioEjemploComponent', () => {
  let component: FormularioEjemploComponent;
  let fixture: ComponentFixture<FormularioEjemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEjemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
