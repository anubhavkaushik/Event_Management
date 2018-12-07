import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInServiceComponent } from './log-in-service.component';

describe('LogInServiceComponent', () => {
  let component: LogInServiceComponent;
  let fixture: ComponentFixture<LogInServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
