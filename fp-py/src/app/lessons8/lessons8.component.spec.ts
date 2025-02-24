import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lessons8Component } from './lessons8.component';

describe('Lessons8Component', () => {
  let component: Lessons8Component;
  let fixture: ComponentFixture<Lessons8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lessons8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lessons8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
