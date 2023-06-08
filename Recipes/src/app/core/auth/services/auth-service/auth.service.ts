import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { User, UserLoginData } from 'src/app/core/models/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly userUrl = environment.baseApiUrl;
  private readonly storageKey = 'logged_user';

  constructor(private http: HttpClient) {}

  userRegistration(user: User): Observable<User> {
    return this.http
      .post<User>(`${this.userUrl}register`, user)
      .pipe(catchError(this.handleError));
  }

  userLogin(userData: UserLoginData): Observable<UserLoginData> {
    return this.http.post<UserLoginData>(`${this.userUrl}login`, userData).pipe(
      tap((data) => {
        if (data) {
          localStorage.setItem(
            this.storageKey,
            JSON.stringify(data.accessToken)
          );
        }
      }),
      catchError(this.handleError)
    );
  }

  getAccessToken(): string {
    return localStorage.getItem(this.storageKey)!;
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
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
