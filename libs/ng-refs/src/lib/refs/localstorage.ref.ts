import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageRef {
  get native(): Storage {
    return localStorage;
  }
}
