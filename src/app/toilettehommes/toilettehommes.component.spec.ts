import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToilettehommesComponent } from './toilettehommes.component';

describe('ToilettehommesComponent', () => {
  let component: ToilettehommesComponent;
  let fixture: ComponentFixture<ToilettehommesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToilettehommesComponent]
    });
    fixture = TestBed.createComponent(ToilettehommesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
