import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/features/recipes/models/recipe.interface';
import { RecipesService } from 'src/app/features/services/recipe/recipes.service';

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
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.recipeId = +this.route.snapshot.paramMap.get('recipeId')!;
    this.getRecipe();
  }

  getRecipe() {
    this.recipesService.getRecipeById(this.recipeId).subscribe((data) => {
      this.recipe = data;
      this.recipeForm.patchValue(this.recipe);
    });
  }
}
