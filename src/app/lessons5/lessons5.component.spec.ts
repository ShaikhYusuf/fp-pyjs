import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lessons5Component } from './lessons5.component';

describe('Lessons5Component', () => {
  let component: Lessons5Component;
  let fixture: ComponentFixture<Lessons5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lessons5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lessons5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
