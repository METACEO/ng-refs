import { TestBed } from '@angular/core/testing';

import { GetComputedStyleRef } from './get-computed-style.ref';

describe('GetComputedStyleRef', () => {
  let service: GetComputedStyleRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetComputedStyleRef]
    });
    service = TestBed.inject(GetComputedStyleRef);
  });

  it('should provide a native method', () => {
    expect(service.native).toBeTruthy();
  });
});
