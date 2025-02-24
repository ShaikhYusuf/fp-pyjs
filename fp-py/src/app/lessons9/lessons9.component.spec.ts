import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lessons9Component } from './lessons9.component';

describe('Lessons9Component', () => {
  let component: Lessons9Component;
  let fixture: ComponentFixture<Lessons9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lessons9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lessons9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
