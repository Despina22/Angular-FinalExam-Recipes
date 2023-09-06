import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeTableComponent } from './components/recipe-table/recipe-table.component';
import { MaterialAdminModule } from './material-imports-admin/material-admin.module';

const COMPONENTS = [RecipeTableComponent, RecipeFormComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MaterialAdminModule,
  ],
})
export class AdminModule {}
