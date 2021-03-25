import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RajasthanroyalsComponent } from './rajasthanroyals.component';

describe('RajasthanroyalsComponent', () => {
  let component: RajasthanroyalsComponent;
  let fixture: ComponentFixture<RajasthanroyalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RajasthanroyalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RajasthanroyalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
