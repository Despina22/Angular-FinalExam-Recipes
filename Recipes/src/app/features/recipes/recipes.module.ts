import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RecipesComponent } from './components/recipes/recipes.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RecipeCardComponent, RecipesComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
  ],
  exports: [RecipeCardComponent],
})
export class RecipesModule {}
