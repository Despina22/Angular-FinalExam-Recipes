import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DurationColorDirective } from './directives/duration-color.directive';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    RecipeCardComponent,
    RecipesComponent,
    DurationColorDirective,
    RecipeDetailsComponent,
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    SharedModule,
  ],
  exports: [RecipeCardComponent],
})
export class RecipesModule {}
