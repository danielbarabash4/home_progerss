import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsByNumComponent } from './actions-by-num.component';

describe('ActionsByNumComponent', () => {
  let component: ActionsByNumComponent;
  let fixture: ComponentFixture<ActionsByNumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionsByNumComponent]
    });
    fixture = TestBed.createComponent(ActionsByNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
