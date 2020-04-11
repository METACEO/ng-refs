import { TestBed } from '@angular/core/testing';

import { TimeoutRef } from './timeout.ref';

describe('TimeoutRef', () => {
  let service: TimeoutRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeoutRef]
    });
    service = TestBed.inject(TimeoutRef);
  });

  it('should provide a clear method', () => {
    expect(service.nativeClear).toBeTruthy();
  });
  it('should provide a set method', () => {
    expect(service.nativeSet).toBeTruthy();
  });
});
