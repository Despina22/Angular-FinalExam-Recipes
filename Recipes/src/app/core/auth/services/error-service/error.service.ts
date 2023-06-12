import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  handleError(errorResponse: HttpErrorResponse) {
    const errorMessages = new Map<string, string>([
      ['Password is too short', 'Password is too short!'],
      ['Email already exists', 'This email already exist!'],
      ['Cannot find user', 'Your email or password are incorrect.'],
      ['Incorrect password', 'Your email or password are incorrect.'],
    ]);

    const errorMessage: string =
      errorMessages.get(errorResponse.error) || 'An error occurred.';
    return throwError(() => errorMessage);
  }
}
