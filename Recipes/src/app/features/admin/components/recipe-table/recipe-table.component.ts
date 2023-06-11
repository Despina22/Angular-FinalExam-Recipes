import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { Recipe } from 'src/app/features/recipes/models/recipe.interface';
import { RecipesService } from 'src/app/features/services/recipe/recipes.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { SnackbarMessageService } from 'src/app/shared/services/snackbar-message-service/snackbar-message.service';

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
    private modal: MatDialog,
    private snackbarMessageService: SnackbarMessageService
  ) {}

  ngOnInit(): void {
    this.getRecipes();
    this.updateRecipeTable();
  }

  openModal() {
    this.modal.open(RecipeFormComponent);
  }

  deleteRecipe(recipe: Recipe) {
    const confirmDialog = this.modal.open(ConfirmDialogComponent, {
      data: { message: 'Are you sure you want to delete this item?' },
      position: { top: '40px' },
    });

    confirmDialog.afterClosed().subscribe((result) => {
      if (result) {
        this.recipeService
          .deleteRecipe(recipe)
          .pipe(take(1))
          .subscribe(
            () => {
              this.snackbarMessageService.showMessage(
                'Successfully delete recipe!!',
                'snack-bar-success-container'
              );
              this.dataSource = this.dataSource.filter(
                (recipeItem: Recipe) => recipeItem.id !== recipe.id
              );
            },
            () => {
              this.snackbarMessageService.showMessage(
                'Error deleting recipe',
                'snack-bar-error-container'
              );
            }
          );
      }
    });
  }

  private getRecipes() {
    this.recipeService
      .getRecipes()
      .pipe(take(1))
      .subscribe((data) => (this.dataSource = data));
  }

  private updateRecipeTable(): void {
    this.recipeService.updateData
      .asObservable()
      .pipe(take(1))
      .subscribe(() => {
        this.getRecipes();
      });
  }
}
