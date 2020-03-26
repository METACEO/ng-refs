import { TestBed } from '@angular/core/testing';

import { LocationRef } from './location.ref';

describe('LocationRef', () => {
  let service: LocationRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationRef]
    });
    service = TestBed.inject(LocationRef);
  });

  it('should provide a native attribute', () => {
    expect(service.native).toBeTruthy();
  });
});
