import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCaseComponent } from './selected-case.component';

describe('SelectedCaseComponent', () => {
  let component: SelectedCaseComponent;
  let fixture: ComponentFixture<SelectedCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedCaseComponent]
    });
    fixture = TestBed.createComponent(SelectedCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
