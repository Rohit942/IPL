import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KolkataknightridersComponent } from './kolkataknightriders.component';

describe('KolkataknightridersComponent', () => {
  let component: KolkataknightridersComponent;
  let fixture: ComponentFixture<KolkataknightridersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KolkataknightridersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KolkataknightridersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
