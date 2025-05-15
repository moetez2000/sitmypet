import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FindSitterComponent } from './find-sitter.component';

describe('FindSitterComponent', () => {
  let component: FindSitterComponent;
  let fixture: ComponentFixture<FindSitterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FindSitterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FindSitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
