import { TestBed } from '@angular/core/testing';

import { WindowRef } from './window.ref';

describe('WindowRef', () => {
  let service: WindowRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowRef]
    });
    service = TestBed.inject(WindowRef);
  });

  it('should provide a native attribute', () => {
    expect(service.native).toBeTruthy();
  });
});
