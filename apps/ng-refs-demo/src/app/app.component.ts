import { Component } from '@angular/core';
import { WindowRef } from 'ng-refs';

@Component({
  selector: 'ng-refs-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly windowRef: WindowRef) {
  }
  public windowRefAlert(): void {
    this.windowRef.native.alert('hello world');
  }
}
