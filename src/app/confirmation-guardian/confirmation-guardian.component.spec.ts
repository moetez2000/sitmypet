import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfirmationGuardianComponent } from './confirmation-guardian.component';

describe('ConfirmationGuardianComponent', () => {
  let component: ConfirmationGuardianComponent;
  let fixture: ComponentFixture<ConfirmationGuardianComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ConfirmationGuardianComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
