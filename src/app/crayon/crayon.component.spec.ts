import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrayonComponent } from './crayon.component';

describe('CrayonComponent', () => {
  let component: CrayonComponent;
  let fixture: ComponentFixture<CrayonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrayonComponent]
    });
    fixture = TestBed.createComponent(CrayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
