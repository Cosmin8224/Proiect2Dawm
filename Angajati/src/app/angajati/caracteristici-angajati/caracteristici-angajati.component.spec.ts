import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristiciAngajatiComponent } from './caracteristici-angajati.component';

describe('CaracteristiciAngajatiComponent', () => {
  let component: CaracteristiciAngajatiComponent;
  let fixture: ComponentFixture<CaracteristiciAngajatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristiciAngajatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristiciAngajatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
