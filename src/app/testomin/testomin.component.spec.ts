/*
* File: testomin.component.spec.ts
* Author: Sangare F. Felisha
* Copyright: 2023, Sangare F. Felisha
* Group: Szoft II N
* Date: 2023-01-04
* Github: https://github.com/fe-ktch/
* Licenc: GNU GPL
*/

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
