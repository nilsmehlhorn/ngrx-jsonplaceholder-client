import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserApiService {
  constructor(private http: HttpClient) {}

  all(): Observable<User[]> {
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users/');
  }

  one(userId: number): Observable<User> {
    return this.http.get<User>(
      `http://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
