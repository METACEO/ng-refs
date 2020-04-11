import { Injectable } from '@angular/core';

@Injectable()
export class IntervalRef {
  nativeClear(handle?: number): void {
    return clearInterval(handle);
  }
  nativeSet(handler: TimerHandler, timeout?: number, ...args: any[]): number {
    return setInterval(handler, timeout, ...args);
  }
}
