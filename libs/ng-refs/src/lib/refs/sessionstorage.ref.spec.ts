import { TestBed } from '@angular/core/testing';

import { SessionstorageRef } from './sessionstorage.ref';

describe('SessionstorageRef', () => {
  let service: SessionstorageRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionstorageRef]
    });
    service = TestBed.inject(SessionstorageRef);
  });

  it('should provide a native attribute', () => {
    expect(service.native).toBeTruthy();
  });
});
