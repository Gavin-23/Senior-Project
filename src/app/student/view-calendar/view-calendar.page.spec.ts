import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCalendarPage } from './view-calendar.page';

describe('ViewCalendarPage', () => {
  let component: ViewCalendarPage;
  let fixture: ComponentFixture<ViewCalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCalendarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
