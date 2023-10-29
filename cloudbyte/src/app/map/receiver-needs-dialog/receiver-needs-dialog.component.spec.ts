import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverNeedsDialogComponent } from './receiver-needs-dialog.component';

describe('ReceiverNeedsDialogComponent', () => {
  let component: ReceiverNeedsDialogComponent;
  let fixture: ComponentFixture<ReceiverNeedsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiverNeedsDialogComponent]
    });
    fixture = TestBed.createComponent(ReceiverNeedsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
