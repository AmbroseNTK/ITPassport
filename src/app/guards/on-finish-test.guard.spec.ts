import { TestBed, async, inject } from '@angular/core/testing';

import { OnFinishTestGuard } from './on-finish-test.guard';

describe('OnFinishTestGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnFinishTestGuard]
    });
  });

  it('should ...', inject([OnFinishTestGuard], (guard: OnFinishTestGuard) => {
    expect(guard).toBeTruthy();
  }));
});
