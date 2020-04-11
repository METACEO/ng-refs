import { Injectable } from '@angular/core';

@Injectable()
export class AnimationFrameRef {
  nativeCancel(handle: number): void {
    return cancelAnimationFrame(handle);
  }
  nativeRequest(callback: FrameRequestCallback): number {
    return requestAnimationFrame(callback);
  }
}
