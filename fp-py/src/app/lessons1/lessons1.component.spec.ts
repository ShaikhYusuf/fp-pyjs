import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lessons1Component } from './lessons1.component';

describe('Lessons1Component', () => {
  let component: Lessons1Component;
  let fixture: ComponentFixture<Lessons1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lessons1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lessons1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
