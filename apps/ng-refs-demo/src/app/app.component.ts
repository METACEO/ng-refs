import { Component } from '@angular/core';
import {
  ConsoleRef,
  IntervalRef,
  LocalstorageRef,
  LocationRef,
  SessionstorageRef,
  TimeoutRef,
  WindowRef
} from 'ng-refs';

@Component({
  selector: 'ng-refs-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public intervalRefMessage;
  public intervalRefInstance;
  public localstorageRefTimestamp = this.localstorageRef.native.getItem('timestamp');
  public sessionstorageRefTimestamp = this.sessionstorageRef.native.getItem('timestamp');
  public timeoutRefMessage;
  public timeoutRefInstance;
  constructor(private readonly consoleRef: ConsoleRef,
              private readonly intervalRef: IntervalRef,
              private readonly localstorageRef: LocalstorageRef,
              private readonly locationRef: LocationRef,
              private readonly sessionstorageRef: SessionstorageRef,
              private readonly timeoutRef: TimeoutRef,
              private readonly windowRef: WindowRef) {
  }
  public consoleRefLog(): void {
    this.consoleRef.native.log(`The time is: ${new Date()}`);
  }
  public intervalRefSet(): void {
    const handler = (dateGetter) => this.intervalRefMessage = `Done at ${dateGetter()}!`;
    const oneSecond = 1000;
    const dateGenerator = () => new Date();
    this.intervalRefMessage = 'Starting interval...'
    // Clear-out any existing interval:
    if (this.intervalRefInstance) {
      this.intervalRef.nativeClear(this.intervalRefInstance);
    }
    // Set a new interval instance:
    this.intervalRefInstance = this.intervalRef
      .nativeSet(handler, oneSecond, dateGenerator);
  }
  public intervalRefClear(): void {
    this.intervalRefMessage = undefined;
    this.intervalRef.nativeClear(this.intervalRefInstance);
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
  public timeoutRefSet(): void {
    const handler = (dateGetter) => this.timeoutRefMessage = `Done at ${dateGetter()}!`;
    const fiveSeconds = 1000 * 5;
    const dateGenerator = () => new Date();
    this.timeoutRefMessage = 'Starting 5 second timer...'
    // Clear-out any existing timeout:
    if (this.timeoutRefInstance) {
      this.timeoutRef.nativeClear(this.timeoutRefInstance);
    }
    // Set a new timeout instance:
    this.timeoutRefInstance = this.timeoutRef
      .nativeSet(handler, fiveSeconds, dateGenerator);
  }
  public timeoutRefClear(): void {
    this.timeoutRefMessage = undefined;
    this.timeoutRef.nativeClear(this.timeoutRefInstance);
  }
  public windowRefAlert(): void {
    this.windowRef.native.alert('hello world');
  }
}
