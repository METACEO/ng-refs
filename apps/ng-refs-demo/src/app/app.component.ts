import { Component } from '@angular/core';
import { ConsoleRef, LocationRef, WindowRef } from 'ng-refs';

@Component({
  selector: 'ng-refs-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly consoleRef: ConsoleRef,
              private readonly locationRef: LocationRef,
              private readonly windowRef: WindowRef) {
  }
  public consoleRefLog(): void {
    this.consoleRef.native.log(`The time is: ${new Date()}`);
  }
  public locationRefHashSet(): void {
    this.locationRef.native.hash = Date.now().toString();
  }
  public windowRefAlert(): void {
    this.windowRef.native.alert('hello world');
  }
}
