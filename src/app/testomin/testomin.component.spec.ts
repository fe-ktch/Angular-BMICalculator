import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestominComponent } from './testomin.component';

describe('TestominComponent', () => {
  let component: TestominComponent;
  let fixture: ComponentFixture<TestominComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestominComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestominComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
