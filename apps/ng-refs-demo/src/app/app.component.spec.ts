import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { WindowRef } from '@ng-refs/ng-refs';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let windowRef: WindowRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [WindowRef],
      declarations: [AppComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    windowRef = TestBed.inject(WindowRef);
  }));

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
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
