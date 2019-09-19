import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTabsPage } from './student-tabs.page';

describe('StudentTabsPage', () => {
  let component: StudentTabsPage;
  let fixture: ComponentFixture<StudentTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
