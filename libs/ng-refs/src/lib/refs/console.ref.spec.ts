import { TestBed } from '@angular/core/testing';

import { ConsoleRef } from './console.ref';

describe('ConsoleRef', () => {
  let service: ConsoleRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsoleRef]
    });
    service = TestBed.inject(ConsoleRef);
  });

  it('should provide a native attribute', () => {
    expect(service.native).toBeTruthy();
  });
});
