import { NgModule } from '@angular/core';

import { ConsoleRef } from './refs/console.ref';
import { WindowRef } from './refs/window.ref';

@NgModule({
  providers: [
    ConsoleRef,
    WindowRef
  ]
})
export class NgRefsModule {}
