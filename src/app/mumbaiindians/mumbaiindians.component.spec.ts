import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MumbaiindiansComponent } from './mumbaiindians.component';

describe('MumbaiindiansComponent', () => {
  let component: MumbaiindiansComponent;
  let fixture: ComponentFixture<MumbaiindiansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MumbaiindiansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MumbaiindiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
