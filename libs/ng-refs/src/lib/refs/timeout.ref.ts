import { Injectable } from '@angular/core';

@Injectable()
export class TimeoutRef {
  nativeClear(handle?: number): void {
    return clearTimeout(handle);
  }
  nativeSet(handler: TimerHandler, timeout?: number, ...args: any[]): number {
    return setTimeout(handler, timeout, ...args);
  }
}
