import { TestBed, async, ComponentFixture } from '@angular/core/testing';
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

import { AppComponent } from './app.component';

class MockStorageRef {
  clear = () => void 0;
  getItem = () => void 0;
  setItem = () => void 0;
  get native() {
    return this;
  }
}
class MockTimerRef {
  nativeClear = () => void 0;
  nativeSet = () => void 0;
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let animationFrameRef: AnimationFrameRef;
  let consoleRef: ConsoleRef;
  let intervalRef: MockTimerRef;
  let localstorageRef: MockStorageRef;
  let locationRef: LocationRef;
  let sessionStorageRef: MockStorageRef;
  let timeoutRef: MockTimerRef;
  let windowRef: WindowRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AnimationFrameRef,
        ConsoleRef,
        LocationRef,
        WindowRef,
        {
          provide: IntervalRef,
          useClass: MockTimerRef
        },
        {
          provide: LocalstorageRef,
          useClass: MockStorageRef
        },
        {
          provide: SessionstorageRef,
          useClass: MockStorageRef
        },
        {
          provide: TimeoutRef,
          useClass: MockTimerRef
        }
      ],
      declarations: [AppComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    animationFrameRef = TestBed.inject(AnimationFrameRef);
    consoleRef = TestBed.inject(ConsoleRef);
    intervalRef = TestBed.inject(IntervalRef) as unknown as MockTimerRef;
    localstorageRef = TestBed.inject(LocalstorageRef) as unknown as MockStorageRef;
    locationRef = TestBed.inject(LocationRef);
    sessionStorageRef = TestBed.inject(SessionstorageRef) as unknown as MockStorageRef;
    timeoutRef = TestBed.inject(TimeoutRef) as unknown as MockTimerRef;
    windowRef = TestBed.inject(WindowRef);
  }));

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('animationFrameRef', () => {
    it('should set a animationFrameRef handler', () => {
      // Stub out the nativeRequest method using our mocked
      // out animationFrameRef object from above.
      const spy = spyOn(animationFrameRef, 'nativeRequest').and.stub();
      // Call the component's method and make sure our
      // stub above has been called correctly.
      fixture.componentInstance.animationFrameRefStart();
      expect(spy).toHaveBeenCalled();
    });
    it('should cancel any animationFrameRef handler', () => {
      // Stub out the nativeCancel method using our mocked
      // out animationFrameRef object from above.
      const spy = spyOn(animationFrameRef, 'nativeCancel').and.stub();
      // Also set animationFrameRefInstance to something
      // we can track for expectations.
      const mockInstance = {};
      fixture.componentInstance.animationFrameRefInstance = mockInstance;
      // Call the component's method and make sure our
      // stub above has been called correctly.
      fixture.componentInstance.animationFrameRefCancel();
      expect(spy).toHaveBeenCalledWith(mockInstance);
    });
  });

  describe('consoleRefLog', () => {
    it('should call the console\'s log method', () => {
      // Create a fake console object that will satisfy our
      // component and make sure to return it.
      const mockConsole = { log: () => void 0 } as Console;
      jest.spyOn(consoleRef, 'native', 'get').mockReturnValue(mockConsole);
      // Stub out the log method using our mocked out
      // console object from above.
      const spy = spyOn(mockConsole, 'log').and.stub();
      // Call the component's method and make sure our
      // stub above has been called correctly.
      fixture.componentInstance.consoleRefLog();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('intervalRef', () => {
    it('should set a intervalRef handler', () => {
      // Stub out the nativeSet method using our mocked
      // out intervalRef object from above.
      const spy = spyOn(intervalRef, 'nativeSet').and.stub();
      // Call the component's method and make sure our
      // stub above has been called correctly.
      fixture.componentInstance.intervalRefSet();
      expect(spy).toHaveBeenCalled();
    });
    it('should clear the intervalRef handler', () => {
      // Stub out the nativeClear method using our mocked
      // out intervalRef object from above.
      const spy = spyOn(intervalRef, 'nativeClear').and.stub();
      // Also set intervalRefInstance to something we can
      // track for expectations.
      const mockInstance = {};
      fixture.componentInstance.intervalRefInstance = mockInstance;
      // Call the component's method and make sure our
      // stub above has been called correctly.
      fixture.componentInstance.intervalRefClear();
      expect(spy).toHaveBeenCalledWith(mockInstance);
    });
  });

  describe('localstorageRef', () => {
    it('should set a localstorage item', () => {
      // Stub out the setItem method using our mocked
      // out localStorage object from above.
      const spy = spyOn(localstorageRef, 'setItem').and.stub();
      // Call the component's method and make sure our
      // stub above has been called correctly.
      fixture.componentInstance.localstorageRefSet();
      expect(spy).toHaveBeenCalled();
    });
    it('should clear localstorage items', () => {
      // Stub out the clear method using our mocked
      // out localStorage object from above.
      const spy = spyOn(localstorageRef, 'clear').and.stub();
      // Call the component's method and make sure our
      // stub above has been called correctly.
      fixture.componentInstance.localstorageRefClear();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('locationRefHashSet', () => {
    it('should set the location\'s hash attribute', () => {
      // Create a fake location object that will satisfy
      // our component and make sure to return it.
      const mockLocation = { hash: null } as Location;
      jest.spyOn(locationRef, 'native', 'get').mockReturnValue(mockLocation);
      // Call the component's method and make sure our
      // hash value gets changed.
      fixture.componentInstance.locationRefHashSet();
      expect(mockLocation.hash).not.toBeNull();
    });
  });

  describe('sessionstorageRef', () => {
    it('should set a sessionStorage item', () => {
      // Stub out the setItem method using our mocked
      // out sessionStorage object from above.
      const spy = spyOn(sessionStorageRef, 'setItem').and.stub();
      // Call the component's method and make sure our
      // stub above has been called correctly.
      fixture.componentInstance.sessionstorageRefSet();
      expect(spy).toHaveBeenCalled();
    });
    it('should clear sessionStorage items', () => {
      // Stub out the clear method using our mocked
      // out sessionStorage object from above.
      const spy = spyOn(sessionStorageRef, 'clear').and.stub();
      // Call the component's method and make sure our
      // stub above has been called correctly.
      fixture.componentInstance.sessionstorageRefClear();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('timeoutRef', () => {
    it('should set a timeoutRef handler', () => {
      // Stub out the nativeSet method using our mocked
      // out timeoutRef object from above.
      const spy = spyOn(timeoutRef, 'nativeSet').and.stub();
      // Call the component's method and make sure our
      // stub above has been called correctly.
      fixture.componentInstance.timeoutRefSet();
      expect(spy).toHaveBeenCalled();
    });
    it('should clear the timeoutRef handler', () => {
      // Stub out the nativeClear method using our mocked
      // out timeoutRef object from above.
      const spy = spyOn(timeoutRef, 'nativeClear').and.stub();
      // Also set timeoutRefInstance to something we can
      // track for expectations.
      const mockInstance = {};
      fixture.componentInstance.timeoutRefInstance = mockInstance;
      // Call the component's method and make sure our
      // stub above has been called correctly.
      fixture.componentInstance.timeoutRefClear();
      expect(spy).toHaveBeenCalledWith(mockInstance);
    });
  });

  describe('windowRefAlert', () => {
    it('should call the window\'s alert method', () => {
      // Create a fake window object that will satisfy our
      // component and make sure to return it.
      const mockWindow = { alert: () => void 0 } as Window;
      jest.spyOn(windowRef, 'native', 'get').mockReturnValue(mockWindow);
      // Stub out the alert method using our mocked out
      // window object from above.
      const spy = spyOn(mockWindow, 'alert').and.stub();
      // Call the component's method and make sure our
      // stub above has been called correctly.
      fixture.componentInstance.windowRefAlert();
      expect(spy).toHaveBeenCalledWith('hello world');
    });
  });
});
