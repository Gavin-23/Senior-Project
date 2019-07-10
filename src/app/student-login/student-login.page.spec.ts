import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLoginPage } from './student-login.page';

describe('StudentLoginPage', () => {
  let component: StudentLoginPage;
  let fixture: ComponentFixture<StudentLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
