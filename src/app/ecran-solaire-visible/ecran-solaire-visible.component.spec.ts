import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranSolaireVisibleComponent } from './ecran-solaire-visible.component';

describe('EcranSolaireVisibleComponent', () => {
  let component: EcranSolaireVisibleComponent;
  let fixture: ComponentFixture<EcranSolaireVisibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcranSolaireVisibleComponent]
    });
    fixture = TestBed.createComponent(EcranSolaireVisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
