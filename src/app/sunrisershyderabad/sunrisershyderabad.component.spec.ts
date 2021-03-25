import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunrisershyderabadComponent } from './sunrisershyderabad.component';

describe('SunrisershyderabadComponent', () => {
  let component: SunrisershyderabadComponent;
  let fixture: ComponentFixture<SunrisershyderabadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunrisershyderabadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunrisershyderabadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
