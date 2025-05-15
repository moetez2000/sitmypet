import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GuardianFormComponent } from './guardian-form.component';

describe('GuardianFormComponent', () => {
  let component: GuardianFormComponent;
  let fixture: ComponentFixture<GuardianFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GuardianFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GuardianFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
