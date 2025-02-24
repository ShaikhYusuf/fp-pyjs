import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lessons7Component } from './lessons7.component';

describe('Lessons7Component', () => {
  let component: Lessons7Component;
  let fixture: ComponentFixture<Lessons7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lessons7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lessons7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
