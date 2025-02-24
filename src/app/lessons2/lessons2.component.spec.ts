import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lessons2Component } from './lessons2.component';

describe('Lessons2Component', () => {
  let component: Lessons2Component;
  let fixture: ComponentFixture<Lessons2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lessons2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lessons2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
