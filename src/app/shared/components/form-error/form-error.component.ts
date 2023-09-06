import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ErrorMessage } from '../../models/error-message.interface';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
})
export class FormErrorComponent {
  @Input() control: AbstractControl | null = null;
  @Input() errorMessage?: ErrorMessage;
}
