import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpChangePwdPage } from './mp-change-pwd.page';

describe('MpChangePwdPage', () => {
  let component: MpChangePwdPage;
  let fixture: ComponentFixture<MpChangePwdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpChangePwdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpChangePwdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
