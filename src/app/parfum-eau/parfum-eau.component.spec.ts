import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParfumEauComponent } from './parfum-eau.component';

describe('ParfumEauComponent', () => {
  let component: ParfumEauComponent;
  let fixture: ComponentFixture<ParfumEauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParfumEauComponent]
    });
    fixture = TestBed.createComponent(ParfumEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
