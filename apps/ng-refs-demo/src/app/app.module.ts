import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRefsModule } from '@ng-refs/ng-refs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgRefsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
