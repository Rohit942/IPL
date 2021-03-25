import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalchallengersbangaloreComponent } from './royalchallengersbangalore.component';

describe('RoyalchallengersbangaloreComponent', () => {
  let component: RoyalchallengersbangaloreComponent;
  let fixture: ComponentFixture<RoyalchallengersbangaloreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoyalchallengersbangaloreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalchallengersbangaloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
