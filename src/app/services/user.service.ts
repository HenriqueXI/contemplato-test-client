import { HttpClient }                             from '@angular/common/http';
import { Injectable }                             from '@angular/core';
import { Observable }                             from 'rxjs';
import { environment }                            from 'src/environments/environment';
import { User, UserSignIn, UserTask, UserTasks }  from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  userSingIn(userParams: User): Observable<UserSignIn> {
    return new Observable<UserSignIn>((observer) => {
      this.http
        .post<UserSignIn>(`${environment.apiUrl}/user-sign-in`, userParams)
        .subscribe(
          (user) => {
            observer.next(user);
            observer.complete();
          },
          () => {
            observer.error('error_on_get_user');
            observer.complete();
          }
        );
    });
  }

  createUser(userParams: User): Observable<User> {
    return new Observable<User>((observer) => {
      this.http.post<User>(`${environment.apiUrl}/users`, userParams).subscribe(
        (user) => {
          observer.next(user);
          observer.complete();
        },
        () => {
          observer.error('error_on_create_user');
          observer.complete();
        }
      );
    });
  }

  getUserTasks(user_id: string): Observable<UserTasks> {
    return new Observable<UserTasks>((observer) => {
      this.http
        .get<UserTasks>(`${environment.apiUrl}/user-task/${user_id}`)
        .subscribe(
          (user) => {
            observer.next(user);
            observer.complete();
          },
          () => {
            observer.error('error_on_create_user');
            observer.complete();
          }
        );
    });
  }

  createUserTask(user_id: string, name: string): Observable<UserTask> {
    let params = {name: name, user_id: user_id}
    return new Observable<UserTask>((observer) => {
      this.http
        .post<UserTask>(`${environment.apiUrl}/user-task/${user_id}`, params)
        .subscribe(
          (user) => {
            observer.next(user);
            observer.complete();
          },
          () => {
            observer.error('error_on_create_user');
            observer.complete();
          }
        );
    });
  }
}
