import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

const MODULES = [
  MatIconModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class MaterialAdminModule {}
