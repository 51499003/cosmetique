import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuileSolaireComponent } from './huile-solaire.component';

describe('HuileSolaireComponent', () => {
  let component: HuileSolaireComponent;
  let fixture: ComponentFixture<HuileSolaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HuileSolaireComponent]
    });
    fixture = TestBed.createComponent(HuileSolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
