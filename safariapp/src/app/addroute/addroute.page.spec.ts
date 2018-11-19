import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddroutePage } from './addroute.page';

describe('AddroutePage', () => {
  let component: AddroutePage;
  let fixture: ComponentFixture<AddroutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddroutePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddroutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
