import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhicapitalsComponent } from './delhicapitals.component';

describe('DelhicapitalsComponent', () => {
  let component: DelhicapitalsComponent;
  let fixture: ComponentFixture<DelhicapitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelhicapitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhicapitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
