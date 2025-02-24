import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lessons10Component } from './lessons10.component';

describe('Lessons10Component', () => {
  let component: Lessons10Component;
  let fixture: ComponentFixture<Lessons10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lessons10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lessons10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
