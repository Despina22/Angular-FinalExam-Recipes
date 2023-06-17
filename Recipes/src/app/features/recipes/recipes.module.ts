import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DurationColorDirective } from './directives/duration-color.directive';
import { RecipesRoutingModule } from './recipes-routing.module';
import { MaterialRecipesModule } from './material-imports-recipes/material-recipes.module';

const COMPONENTS = [
  RecipeCardComponent,
  RecipesComponent,
  RecipeDetailsComponent,
];

@NgModule({
  declarations: [...COMPONENTS, DurationColorDirective],
  imports: [
    CommonModule,
    SharedModule,
    RecipesRoutingModule,
    MaterialRecipesModule,
  ],
  exports: [RecipeCardComponent],
})
export class RecipesModule {}
