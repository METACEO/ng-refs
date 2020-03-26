import { Injectable } from '@angular/core';

@Injectable()
export class LocationRef {
  get native(): Location {
    return location;
  }
}
