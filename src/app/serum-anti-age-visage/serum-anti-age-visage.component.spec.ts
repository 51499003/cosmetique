import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerumAntiAgeVisageComponent } from './serum-anti-age-visage.component';

describe('SerumAntiAgeVisageComponent', () => {
  let component: SerumAntiAgeVisageComponent;
  let fixture: ComponentFixture<SerumAntiAgeVisageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerumAntiAgeVisageComponent]
    });
    fixture = TestBed.createComponent(SerumAntiAgeVisageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
