import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostComment } from './comment';

@Injectable({ providedIn: 'root' })
export class CommentApiService {
  constructor(private http: HttpClient) {}

  byPost(postId: number): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
  }
}
