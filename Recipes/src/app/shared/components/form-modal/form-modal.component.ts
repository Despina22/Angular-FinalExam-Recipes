import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs';
import { RecipesService } from 'src/app/features/services/recipe/recipes.service';
import { SnackbarMessageService } from '../../services/snackbar-message-service/snackbar-message.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent implements OnInit {
  closeDialog: boolean = false;

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
    videoUrl: new FormControl('', [
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
    @Inject(MAT_DIALOG_DATA) public data: { title: string; button: string },
    private recipesService: RecipesService,
    private snackbarMessageService: SnackbarMessageService
  ) {}

  ngOnInit(): void {}

  onCreate() {
    const recipe = {
      ...this.recipeForm.value,
      createdDate: new Date().toISOString(),
    };

    if (!this.recipeForm.valid) return;
    this.recipesService
      .createRecipe(recipe)
      .pipe(take(1))
      .subscribe(() => {
        this.snackbarMessageService.showMessage(
          'Successfully created recipe!!',
          'snack-bar-success-container'
        );
        this.closeDialog = true;
      });
  }
}
