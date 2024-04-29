import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToilletParfumComponent } from './toillet-parfum.component';

describe('ToilletParfumComponent', () => {
  let component: ToilletParfumComponent;
  let fixture: ComponentFixture<ToilletParfumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToilletParfumComponent]
    });
    fixture = TestBed.createComponent(ToilletParfumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
