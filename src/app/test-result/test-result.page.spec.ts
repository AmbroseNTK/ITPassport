import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestResultPage } from './test-result.page';

describe('TestResultPage', () => {
  let component: TestResultPage;
  let fixture: ComponentFixture<TestResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestResultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
