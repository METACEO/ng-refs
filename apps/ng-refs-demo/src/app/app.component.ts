import { Component, Inject } from '@angular/core';
import {
  AnimationFrameRef,
  ConsoleRef,
  IntervalRef,
  LocalstorageRef,
  LocationRef,
  SessionstorageRef,
  TimeoutRef,
  WindowRef
} from 'ng-refs';

const ONE_SECOND = 1000;
const FIVE_SECONDS = ONE_SECOND * 5;
const DATE_GENERATOR = () => new Date();

@Component({
  selector: 'ng-refs-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public animationFrameRefCount;
  public animationFrameRefInstance;
  public animationFrameRefInterval;
  public animationFrameRefResult;
  public intervalRefMessage;
  public intervalRefInstance;
  public localstorageRefTimestamp = this.localstorageRef.getItem('timestamp');
  public sessionstorageRefTimestamp = this.sessionstorageRef.getItem('timestamp');
  public timeoutRefMessage;
  public timeoutRefInstance;
  constructor(private readonly animationFrameRef: AnimationFrameRef,
              @Inject(ConsoleRef) readonly consoleRef: Console,
              private readonly intervalRef: IntervalRef,
              @Inject(LocalstorageRef) readonly localstorageRef: Storage,
              @Inject(LocationRef) readonly locationRef: Location,
              @Inject(SessionstorageRef) readonly sessionstorageRef: Storage,
              private readonly timeoutRef: TimeoutRef,
              @Inject(WindowRef) readonly windowRef: Window) {
  }
  public animationFrameRefStart(): void {
    // This counter, once called later, will increase
    // the frame count and then queue itself again with
    // another request.
    this.animationFrameRefCount = 0;
    const counter = () => {
      this.animationFrameRefCount++;
      this.animationFrameRefInstance = this.animationFrameRef
        .nativeRequest(counter);
    }
    // This printer, when called later, will take the
    // current count and place it into the result and
    // then reset the count back to zero for future
    // calls.
    this.animationFrameRefResult = 'Starting FPS...';
    const fpsPrinter = () => {
      this.animationFrameRefResult = `${this.animationFrameRefCount} fps`;
      this.animationFrameRefCount = 0;
    }
    // Clear-out any existing interval:
    if (this.animationFrameRefInterval) {
      this.intervalRef.nativeClear(this.animationFrameRefInterval);
    }
    // Set a new interval instance:
    this.animationFrameRefInterval = this.intervalRef
      .nativeSet(fpsPrinter, ONE_SECOND);
    // Begin the counters:
    counter();
  }
  public animationFrameRefCancel(): void {
    this.animationFrameRefResult = undefined;
    this.animationFrameRef.nativeCancel(this.animationFrameRefInstance);
    this.intervalRef.nativeClear(this.animationFrameRefInterval);
  }
  public consoleRefLog(): void {
    this.consoleRef.log(`The time is: ${new Date()}`);
  }
  public intervalRefSet(): void {
    const handler = (dateGetter) => this.intervalRefMessage = `Done at ${dateGetter()}!`;
    this.intervalRefMessage = 'Starting interval...'
    // Clear-out any existing interval:
    if (this.intervalRefInstance) {
      this.intervalRef.nativeClear(this.intervalRefInstance);
    }
    // Set a new interval instance:
    this.intervalRefInstance = this.intervalRef
      .nativeSet(handler, ONE_SECOND, DATE_GENERATOR);
  }
  public intervalRefClear(): void {
    this.intervalRefMessage = undefined;
    this.intervalRef.nativeClear(this.intervalRefInstance);
  }
  public localstorageRefSet(): void {
    this.localstorageRefTimestamp = Date.now().toString();
    this.localstorageRef.setItem('timestamp', this.localstorageRefTimestamp);
  }
  public localstorageRefClear(): void {
    this.localstorageRefTimestamp = undefined;
    this.localstorageRef.clear();
  }
  public locationRefHashSet(): void {
    this.locationRef.hash = Date.now().toString();
  }
  public sessionstorageRefSet(): void {
    this.sessionstorageRefTimestamp = Date.now().toString();
    this.sessionstorageRef.setItem('timestamp', this.sessionstorageRefTimestamp);
  }
  public sessionstorageRefClear(): void {
    this.sessionstorageRefTimestamp = undefined;
    this.sessionstorageRef.clear();
  }
  public timeoutRefSet(): void {
    const handler = (dateGetter) => this.timeoutRefMessage = `Done at ${dateGetter()}!`;
    this.timeoutRefMessage = 'Starting 5 second timer...'
    // Clear-out any existing timeout:
    if (this.timeoutRefInstance) {
      this.timeoutRef.nativeClear(this.timeoutRefInstance);
    }
    // Set a new timeout instance:
    this.timeoutRefInstance = this.timeoutRef
      .nativeSet(handler, FIVE_SECONDS, DATE_GENERATOR);
  }
  public timeoutRefClear(): void {
    this.timeoutRefMessage = undefined;
    this.timeoutRef.nativeClear(this.timeoutRefInstance);
  }
  public windowRefAlert(): void {
    this.windowRef.alert('hello world');
  }
}
