import { NgModule } from '@angular/core';

import { ConsoleRef } from './refs/console.ref';
import { LocalstorageRef } from './refs/localstorage.ref';
import { LocationRef } from './refs/location.ref';
import { SessionstorageRef } from './refs/sessionstorage.ref';
import { WindowRef } from './refs/window.ref';

@NgModule({
  providers: [
    ConsoleRef,
    LocalstorageRef,
    LocationRef,
    SessionstorageRef,
    WindowRef
  ]
})
export class NgRefsModule {}
