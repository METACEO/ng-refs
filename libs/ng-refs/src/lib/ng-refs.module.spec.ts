import { async, TestBed } from '@angular/core/testing';
import { NgRefsModule } from './ng-refs.module';

describe('NgRefsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgRefsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgRefsModule).toBeDefined();
  });
});
