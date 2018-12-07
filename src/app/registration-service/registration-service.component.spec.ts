import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationServiceComponent } from './registration-service.component';

describe('RegistrationServiceComponent', () => {
  let component: RegistrationServiceComponent;
  let fixture: ComponentFixture<RegistrationServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
