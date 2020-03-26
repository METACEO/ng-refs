import { TestBed } from '@angular/core/testing';

import { LocalstorageRef } from './localstorage.ref';

describe('LocalstorageRef', () => {
  let service: LocalstorageRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalstorageRef]
    });
    service = TestBed.inject(LocalstorageRef);
  });

  it('should provide a native attribute', () => {
    expect(service.native).toBeTruthy();
  });
});
