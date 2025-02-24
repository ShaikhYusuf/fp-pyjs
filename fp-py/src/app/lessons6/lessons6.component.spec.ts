import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lessons6Component } from './lessons6.component';

describe('Lessons6Component', () => {
  let component: Lessons6Component;
  let fixture: ComponentFixture<Lessons6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lessons6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lessons6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
