import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultapqrComponent } from './consultapqr.component';

describe('ConsultapqrComponent', () => {
  let component: ConsultapqrComponent;
  let fixture: ComponentFixture<ConsultapqrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultapqrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultapqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
