import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedModalComponent } from './interested-modal.component';

describe('InterestedModalComponent', () => {
  let component: InterestedModalComponent;
  let fixture: ComponentFixture<InterestedModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterestedModalComponent]
    });
    fixture = TestBed.createComponent(InterestedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
