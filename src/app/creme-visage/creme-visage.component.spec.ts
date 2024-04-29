import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CremeVisageComponent } from './creme-visage.component';

describe('CremeVisageComponent', () => {
  let component: CremeVisageComponent;
  let fixture: ComponentFixture<CremeVisageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CremeVisageComponent]
    });
    fixture = TestBed.createComponent(CremeVisageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
