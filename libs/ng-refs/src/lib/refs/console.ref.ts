import { Injectable } from '@angular/core';

@Injectable()
export class ConsoleRef {
  get native(): Console {
    return console;
  }
}
