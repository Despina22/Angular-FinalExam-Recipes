import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent implements OnInit {
  recipeForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Z][a-zA-Z0-9]*$'),
      Validators.maxLength(55),
    ]),
    image: new FormControl('', [
      Validators.required,
      Validators.pattern('^https?://.*$'),
    ]),
    videoUrl: new FormControl('', [
      Validators.required,
      Validators.pattern('^https?://.*$'),
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
    @Inject(MAT_DIALOG_DATA) public data: { title: string; button: string }
  ) {}

  ngOnInit(): void {}

  onCreate() {
    const recipe = {
      ...this.recipeForm.value,
      createdDate: new Date().toISOString(),
    };
    console.log(recipe);
  }
}
