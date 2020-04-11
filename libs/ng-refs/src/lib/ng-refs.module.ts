import { NgModule } from '@angular/core';

import { AnimationFrameRef } from './refs/animationframe.ref';
import { ConsoleRef } from './refs/console.ref';
import { IntervalRef } from './refs/interval.ref';
import { LocalstorageRef } from './refs/localstorage.ref';
import { LocationRef } from './refs/location.ref';
import { SessionstorageRef } from './refs/sessionstorage.ref';
import { TimeoutRef } from './refs/timeout.ref';
import { WindowRef } from './refs/window.ref';

@NgModule({
  providers: [
    AnimationFrameRef,
    ConsoleRef,
    IntervalRef,
    LocalstorageRef,
    LocationRef,
    SessionstorageRef,
    TimeoutRef,
    WindowRef
  ]
})
export class NgRefsModule {}
