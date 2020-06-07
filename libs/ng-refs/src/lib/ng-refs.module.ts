import { NgModule } from '@angular/core';

import { AnimationFrameRef } from './refs/animationframe.ref';
import { ConsoleRef } from './refs/console.ref';
import { GetComputedStyleRef } from './refs/get-computed-style.ref';
import { IntervalRef } from './refs/interval.ref';
import { LocalstorageRef } from './refs/localstorage.ref';
import { LocationRef } from './refs/location.ref';
import { SessionstorageRef } from './refs/sessionstorage.ref';
import { TimeoutRef } from './refs/timeout.ref';
import { WindowRef } from './refs/window.ref';

@NgModule({
  providers: [
    AnimationFrameRef,
    {
      provide: ConsoleRef,
      useValue: console
    },
    GetComputedStyleRef,
    IntervalRef,
    {
      provide: LocalstorageRef,
      useValue: localStorage
    },
    {
      provide: LocationRef,
      useValue: location
    },
    {
      provide: SessionstorageRef,
      useValue: sessionStorage
    },
    TimeoutRef,
    {
      provide: WindowRef,
      useValue: window
    }
  ]
})
export class NgRefsModule {}
