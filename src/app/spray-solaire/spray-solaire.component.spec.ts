import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpraySolaireComponent } from './spray-solaire.component';

describe('SpraySolaireComponent', () => {
  let component: SpraySolaireComponent;
  let fixture: ComponentFixture<SpraySolaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpraySolaireComponent]
    });
    fixture = TestBed.createComponent(SpraySolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
