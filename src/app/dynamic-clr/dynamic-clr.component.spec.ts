import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicClrComponent } from './dynamic-clr.component';

describe('DynamicClrComponent', () => {
  let component: DynamicClrComponent;
  let fixture: ComponentFixture<DynamicClrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicClrComponent]
    });
    fixture = TestBed.createComponent(DynamicClrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
