import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennaisuperkingsComponent } from './chennaisuperkings.component';

describe('ChennaisuperkingsComponent', () => {
  let component: ChennaisuperkingsComponent;
  let fixture: ComponentFixture<ChennaisuperkingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChennaisuperkingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChennaisuperkingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
