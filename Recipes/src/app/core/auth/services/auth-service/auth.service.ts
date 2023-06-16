import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { User } from 'src/app/core/models/user.interface';
import { environment } from '@env';
import { ErrorService } from '../error-service/error.service';
import { LocalStorage } from 'src/app/core/models/local-storage.interface';
import { Role } from 'src/app/core/models/role.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAdmin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private readonly userUrl = environment.baseApiUrl;
  private readonly storageKey: string = 'logged_user';

  constructor(private http: HttpClient, private errorService: ErrorService) {
    this.isUserLoggedIn();
  }

  userRegistration(user: User): Observable<User> {
    return this.http
      .post<User>(`${this.userUrl}register`, user)
      .pipe(catchError(this.errorService.handleError));
  }

  userLogin(userData: User): Observable<User> {
    return this.http.post<User>(`${this.userUrl}login`, userData).pipe(
      tap((data) => {
        if (data) {
          const user: LocalStorage = {
            accessToken: data.accessToken,
            userId: data.user.id,
            role: data.user.role,
          };

          localStorage.setItem(this.storageKey, JSON.stringify(user));
          this.setAuthState(user);
        }
      }),
      catchError(this.errorService.handleError)
    );
  }

  getUserId(): string {
    const user = JSON.parse(localStorage.getItem(this.storageKey)!);
    return user.userId;
  }

  logout() {
    this.setAuthState();
    localStorage.removeItem(this.storageKey);
  }

  private setAuthState(user?: LocalStorage): void {
    let isLoggedIn = false;
    let isAdmin = false;

    if (user) {
      isAdmin = user.role === Role.ADMIN;
      isLoggedIn = true;
    }

    this.isAdmin$.next(isAdmin);
    this.isLoggedIn$.next(isLoggedIn);
  }

  private isUserLoggedIn() {
    const storedUser = localStorage.getItem(this.storageKey);
    if (storedUser) {
      const user = JSON.parse(storedUser);

      this.setAuthState(user);
    }
  }
}
