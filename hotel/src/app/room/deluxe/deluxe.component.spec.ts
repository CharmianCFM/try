import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeluxeComponent } from './deluxe.component';

describe('DeluxeComponent', () => {
  let component: DeluxeComponent;
  let fixture: ComponentFixture<DeluxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeluxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeluxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
