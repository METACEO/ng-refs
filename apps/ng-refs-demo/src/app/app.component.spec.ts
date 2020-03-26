import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ConsoleRef, LocalstorageRef, LocationRef, WindowRef } from 'ng-refs';

import { AppComponent } from './app.component';

class MockLocalStorageRef {
  clear = () => void 0;
  getItem = () => void 0;
  setItem = () => void 0;
  get native() {
    return this;
  }
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let consoleRef: ConsoleRef;
  let localstorageRef: MockLocalStorageRef;
  let locationRef: LocationRef;
  let windowRef: WindowRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ConsoleRef,
        LocationRef,
        WindowRef,
        {
          provide: LocalstorageRef,
          useClass: MockLocalStorageRef
        }
      ],
      declarations: [AppComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    consoleRef = TestBed.inject(ConsoleRef);
    localstorageRef = TestBed.inject(LocalstorageRef) as unknown as MockLocalStorageRef;
    locationRef = TestBed.inject(LocationRef);
    windowRef = TestBed.inject(WindowRef);
  }));

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
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
