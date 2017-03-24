/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MultiBarchartComponent } from './multibarchart.component';

describe('MultiBarchartComponent', () => {
  let component: MultiBarchartComponent;
  let fixture: ComponentFixture<BarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
