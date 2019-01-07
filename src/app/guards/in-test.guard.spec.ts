import { TestBed, async, inject } from '@angular/core/testing';

import { InTestGuard } from './in-test.guard';

describe('InTestGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InTestGuard]
    });
  });

  it('should ...', inject([InTestGuard], (guard: InTestGuard) => {
    expect(guard).toBeTruthy();
  }));
});
