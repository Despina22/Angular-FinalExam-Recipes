import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAuthenticationComponent } from './layout-authentication.component';

describe('LayoutAuthenticationComponent', () => {
  let component: LayoutAuthenticationComponent;
  let fixture: ComponentFixture<LayoutAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutAuthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
