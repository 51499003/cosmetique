import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NettoyantsComponent } from './nettoyants.component';

describe('NettoyantsComponent', () => {
  let component: NettoyantsComponent;
  let fixture: ComponentFixture<NettoyantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NettoyantsComponent]
    });
    fixture = TestBed.createComponent(NettoyantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
