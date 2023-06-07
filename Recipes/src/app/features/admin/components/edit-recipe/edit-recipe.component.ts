import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Recipe } from 'src/app/features/recipes/models/recipe.interface';
import { RecipesService } from 'src/app/features/services/recipe/recipes.service';
import { SnackbarMessageService } from 'src/app/shared/services/snackbar-message-service/snackbar-message.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
})
export class EditRecipeComponent implements OnInit {
  closeDialog: boolean = false;
  recipeId!: number;
  recipe?: Recipe;

  recipeForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][A-Za-z0-9\s]*$/),
      Validators.maxLength(55),
    ]),
    image: new FormControl('', [
      Validators.required,
      Validators.pattern('^https?://.*$'),
    ]),
    youTubeLink: new FormControl('', [
      Validators.required,
      Validators.pattern(/^https?:\/\/(?:www\.)?youtube\.com\/.*$/),
    ]),
    description: new FormControl('', Validators.required),
    duration: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(\d)+$/),
    ]),
    stars: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(\d)+$/),
    ]),
  });

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private snackbarMessageService: SnackbarMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeId = +this.route.snapshot.paramMap.get('recipeId')!;
    this.getRecipe();
  }

  getRecipe() {
    this.recipesService
      .getRecipeById(this.recipeId)
      .pipe(take(1))
      .subscribe((data) => {
        this.recipe = data;
        this.recipeForm.patchValue(this.recipe);
      });
  }

  onUpdate() {
    if (this.recipeForm.valid) {
      const updatedRecipe = { ...this.recipe, ...this.recipeForm.value };
      this.recipesService
        .updateRecipe(updatedRecipe)
        .pipe(take(1))
        .subscribe(() => {
          this.snackbarMessageService.showMessage(
            'You successfully updated the recipe!!!',
            'snack-bar-success-container'
          );
          this.router.navigate(['/admin']);
        });
    }
  }
}
