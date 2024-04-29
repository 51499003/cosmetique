import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouComponent } from './carou.component';

describe('CarouComponent', () => {
  let component: CarouComponent;
  let fixture: ComponentFixture<CarouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouComponent]
    });
    fixture = TestBed.createComponent(CarouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
