import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { CommentApiService } from '../api/comment-api.service';
import { displayPostDetail } from '../../posts/pages/post-detail/post-detail.actions';
import { CommentsFeature } from './comments.feature';
import { loadByPostSuccess } from '../api/comments-api.action';

@Injectable()
export class CommentsEffects {
  loadByPost$ = createEffect(() =>
    this.action$.pipe(
      ofType(displayPostDetail),
      concatLatestFrom(() =>
        this.store.select(CommentsFeature.selectCommentsByPost)
      ),
      mergeMap(([{ id: postId }, commentsByPost]) => {
        const comments = commentsByPost[postId];
        return comments
          ? EMPTY
          : this.commentApi
              .byPost(postId)
              .pipe(map((comments) => loadByPostSuccess({ comments, postId })));
      })
    )
  );

  constructor(
    private action$: Actions,
    private commentApi: CommentApiService,
    private store: Store
  ) {}
}
