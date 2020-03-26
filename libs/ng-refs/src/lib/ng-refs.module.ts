import { NgModule } from '@angular/core';

import { ConsoleRef } from './refs/console.ref';
import { LocationRef } from './refs/location.ref';
import { WindowRef } from './refs/window.ref';

@NgModule({
  providers: [
    ConsoleRef,
    LocationRef,
    WindowRef
  ]
})
export class NgRefsModule {}
