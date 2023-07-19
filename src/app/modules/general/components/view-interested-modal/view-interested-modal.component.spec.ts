import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInterestedModalComponent } from './view-interested-modal.component';

describe('ViewInterestedModalComponent', () => {
  let component: ViewInterestedModalComponent;
  let fixture: ComponentFixture<ViewInterestedModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewInterestedModalComponent]
    });
    fixture = TestBed.createComponent(ViewInterestedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
