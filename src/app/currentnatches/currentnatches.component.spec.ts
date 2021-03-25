import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentnatchesComponent } from './currentnatches.component';

describe('CurrentnatchesComponent', () => {
  let component: CurrentnatchesComponent;
  let fixture: ComponentFixture<CurrentnatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentnatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentnatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
