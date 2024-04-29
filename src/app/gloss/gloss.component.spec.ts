import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossComponent } from './gloss.component';

describe('GlossComponent', () => {
  let component: GlossComponent;
  let fixture: ComponentFixture<GlossComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlossComponent]
    });
    fixture = TestBed.createComponent(GlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
