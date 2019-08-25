import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfochangeComponent } from './infochange.component';

describe('InfochangeComponent', () => {
  let component: InfochangeComponent;
  let fixture: ComponentFixture<InfochangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfochangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfochangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
