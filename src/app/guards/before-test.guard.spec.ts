import { TestBed, async, inject } from '@angular/core/testing';

import { BeforeTestGuard } from './before-test.guard';

describe('BeforeTestGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeforeTestGuard]
    });
  });

  it('should ...', inject([BeforeTestGuard], (guard: BeforeTestGuard) => {
    expect(guard).toBeTruthy();
  }));
});
