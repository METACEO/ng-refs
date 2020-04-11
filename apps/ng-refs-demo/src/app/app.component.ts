import { Component } from '@angular/core';
import { ConsoleRef, LocalstorageRef, LocationRef, SessionstorageRef, WindowRef } from 'ng-refs';

@Component({
  selector: 'ng-refs-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public localstorageRefTimestamp = this.localstorageRef.native.getItem('timestamp');
  public sessionstorageRefTimestamp = this.sessionstorageRef.native.getItem('timestamp');
  constructor(private readonly consoleRef: ConsoleRef,
              private readonly localstorageRef: LocalstorageRef,
              private readonly locationRef: LocationRef,
              private readonly sessionstorageRef: SessionstorageRef,
              private readonly windowRef: WindowRef) {
  }
  public consoleRefLog(): void {
    this.consoleRef.native.log(`The time is: ${new Date()}`);
  }
  public localstorageRefSet(): void {
    this.localstorageRefTimestamp = Date.now().toString();
    this.localstorageRef.native.setItem('timestamp', this.localstorageRefTimestamp);
  }
  public localstorageRefClear(): void {
    this.localstorageRefTimestamp = undefined;
    this.localstorageRef.native.clear();
  }
  public locationRefHashSet(): void {
    this.locationRef.native.hash = Date.now().toString();
  }
  public sessionstorageRefSet(): void {
    this.sessionstorageRefTimestamp = Date.now().toString();
    this.sessionstorageRef.native.setItem('timestamp', this.sessionstorageRefTimestamp);
  }
  public sessionstorageRefClear(): void {
    this.sessionstorageRefTimestamp = undefined;
    this.sessionstorageRef.native.clear();
  }
  public windowRefAlert(): void {
    this.windowRef.native.alert('hello world');
  }
}
