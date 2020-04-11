import { TestBed } from '@angular/core/testing';

import { AnimationFrameRef } from './animationframe.ref';

describe('AnimationFrameRef', () => {
  let service: AnimationFrameRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimationFrameRef]
    });
    service = TestBed.inject(AnimationFrameRef);
  });

  it('should provide a cancel method', () => {
    expect(service.nativeCancel).toBeTruthy();
  });
  it('should provide a request method', () => {
    expect(service.nativeRequest).toBeTruthy();
  });
});
