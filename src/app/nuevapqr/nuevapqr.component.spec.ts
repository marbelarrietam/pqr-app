import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevapqrComponent } from './nuevapqr.component';

describe('NuevapqrComponent', () => {
  let component: NuevapqrComponent;
  let fixture: ComponentFixture<NuevapqrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevapqrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevapqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
