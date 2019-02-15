import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincompComponent } from './logincomp.component';

describe('LogincompComponent', () => {
  let component: LogincompComponent;
  let fixture: ComponentFixture<LogincompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogincompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
