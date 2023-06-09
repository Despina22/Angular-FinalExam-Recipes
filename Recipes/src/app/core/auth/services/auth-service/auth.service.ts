import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { User } from 'src/app/core/models/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAdmin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private readonly userUrl = environment.baseApiUrl;
  private readonly storageKey: string = 'logged_user';

  constructor(private http: HttpClient) {}

  userRegistration(user: User): Observable<User> {
    return this.http
      .post<User>(`${this.userUrl}register`, user)
      .pipe(catchError(this.handleError));
  }

  userLogin(userData: User): Observable<User> {
    return this.http.post<User>(`${this.userUrl}login`, userData).pipe(
      tap((data) => {
        if (data) {
          const user = {
            accessToken: data.accessToken,
            role: data.user.role,
          };
          localStorage.setItem(this.storageKey, JSON.stringify(user));
          this.isAdmin$.next(data.user.role === 'admin');
          this.isLoggedIn$.next(true);
        }
      }),
      catchError(this.handleError)
    );
  }

  isUserAdmin(): boolean {
    return this.isAdmin$.getValue();
  }

  logout() {
    this.isAdmin$.next(false);
    this.isLoggedIn$.next(false);
    localStorage.removeItem(this.storageKey);
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
