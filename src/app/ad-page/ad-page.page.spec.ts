import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPagePage } from './ad-page.page';

describe('AdPagePage', () => {
  let component: AdPagePage;
  let fixture: ComponentFixture<AdPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
