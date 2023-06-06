import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, take } from 'rxjs';
import { Recipe } from 'src/app/features/recipes/models/recipe.interface';
import { RecipesService } from 'src/app/features/services/recipe/recipes.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { FormModalComponent } from 'src/app/shared/components/form-modal/form-modal.component';

@Component({
  selector: 'app-recipe-table',
  templateUrl: './recipe-table.component.html',
  styleUrls: ['./recipe-table.component.scss'],
})
export class RecipeTableComponent implements OnInit {
  displayedColumns: string[] = [
    'rowIndex',
    'name',
    'stars',
    'youTubeLink',
    'dateCreated',
    'edit',
    'delete',
  ];
  dataSource!: Recipe[];

  constructor(
    private recipeService: RecipesService,
    private modal: MatDialog
  ) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService
      .getRecipes()
      .pipe(take(1))
      .subscribe((data) => (this.dataSource = data));
  }

  openModal() {
    this.modal.open(FormModalComponent, {
      data: {
        title: 'New Recipe',
        button: 'Create',
      },
      position: { top: '40px' },
    });
  }

  onEdit() {
    console.log('yay  ediitt');
  }

  deleteRecipe(recipe: Recipe) {
    const confirmDialog = this.modal.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm',
        message: 'Are you sure you want to delete this item?',
      },
      position: { top: '40px' },
    });

    confirmDialog.afterClosed().subscribe((result) => {
      if (result) {
        this.recipeService
          .deleteRecipe(recipe)
          .pipe(take(1))
          .subscribe(
            () => {
              this.dataSource = this.dataSource.filter(
                (item: any) => item.id !== recipe.id
              );
            },
            (error) => {
              console.error('Error deleting recipe:', error);
            }
          );
      }
    });
  }
}
