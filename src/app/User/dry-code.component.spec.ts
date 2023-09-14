import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryCodeComponent } from './dry-code.component';

describe('DryCodeComponent', () => {
  let component: DryCodeComponent;
  let fixture: ComponentFixture<DryCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DryCodeComponent]
    });
    fixture = TestBed.createComponent(DryCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
