import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

const MODULES = [MatCardModule, MatIconModule, MatTooltipModule];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class MaterialRecipesModule {}
