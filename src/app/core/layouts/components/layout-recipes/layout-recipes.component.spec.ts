import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRecipesComponent } from './layout-recipes.component';

describe('LayoutRecipesComponent', () => {
  let component: LayoutRecipesComponent;
  let fixture: ComponentFixture<LayoutRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
