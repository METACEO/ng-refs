import { TestBed } from '@angular/core/testing';

import { IntervalRef } from './interval.ref';

describe('IntervalRef', () => {
  let service: IntervalRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntervalRef]
    });
    service = TestBed.inject(IntervalRef);
  });

  it('should provide a clear method', () => {
    expect(service.nativeClear).toBeTruthy();
  });
  it('should provide a set method', () => {
    expect(service.nativeSet).toBeTruthy();
  });
});
