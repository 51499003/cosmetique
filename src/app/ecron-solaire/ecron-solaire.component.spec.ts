import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcronSolaireComponent } from './ecron-solaire.component';

describe('EcronSolaireComponent', () => {
  let component: EcronSolaireComponent;
  let fixture: ComponentFixture<EcronSolaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcronSolaireComponent]
    });
    fixture = TestBed.createComponent(EcronSolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
