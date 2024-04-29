import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GelNettoyantComponent } from './gel-nettoyant.component';

describe('GelNettoyantComponent', () => {
  let component: GelNettoyantComponent;
  let fixture: ComponentFixture<GelNettoyantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GelNettoyantComponent]
    });
    fixture = TestBed.createComponent(GelNettoyantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
