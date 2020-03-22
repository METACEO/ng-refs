import { Injectable } from '@angular/core';

@Injectable()
export class WindowRef {
  get native(): Window {
    return window;
  }
}
