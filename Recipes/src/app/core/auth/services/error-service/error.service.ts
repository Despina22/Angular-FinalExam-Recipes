import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  handleError(errorResponse: HttpErrorResponse) {
    let errorMessage: string = 'An error occurred';
    if (!errorResponse.error) {
      return throwError(errorMessage);
    }
    switch (errorResponse.error) {
      case 'Password is too short':
        errorMessage = 'Password is too short!!!';
        break;
      case 'Email already exists':
        errorMessage = 'This email already exist!!!';
        break;
      case 'Cannot find user':
        errorMessage = 'Your email or password are incorrect.';
        break;
      case 'Incorrect password':
        errorMessage = 'Your email or password are incorrect.';
        break;
    }
    return throwError(errorMessage);
  }
}
