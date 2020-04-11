import { Injectable } from '@angular/core';

@Injectable()
export class SessionstorageRef {
  get native(): Storage {
    return sessionStorage;
  }
}
