import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EauhommeComponent } from './eauhomme.component';

describe('EauhommeComponent', () => {
  let component: EauhommeComponent;
  let fixture: ComponentFixture<EauhommeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EauhommeComponent]
    });
    fixture = TestBed.createComponent(EauhommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
