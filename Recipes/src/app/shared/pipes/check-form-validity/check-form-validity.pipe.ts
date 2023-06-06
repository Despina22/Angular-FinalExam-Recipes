import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'checkFormValidity',
  pure: false,
})
export class CheckFormValidityPipe implements PipeTransform {
  transform(formControl: AbstractControl, error: string): boolean {
    return formControl?.hasError(error);
  }
}
