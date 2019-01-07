import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRoomPage } from './test-room.page';

describe('TestRoomPage', () => {
  let component: TestRoomPage;
  let fixture: ComponentFixture<TestRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRoomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
