import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingsXIpunjabComponent } from './kings-xipunjab.component';

describe('KingsXIpunjabComponent', () => {
  let component: KingsXIpunjabComponent;
  let fixture: ComponentFixture<KingsXIpunjabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingsXIpunjabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingsXIpunjabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
