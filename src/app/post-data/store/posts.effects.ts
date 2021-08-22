import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { exhaustMap, map, mergeMap } from 'rxjs/operators';
import { displayPostDetail } from '../../posts/pages/post-detail/post-detail.actions';
import { displayPostList } from '../../posts/pages/post-list/post-list.actions';
import { PostsFeature } from './posts.feature';
import { PostApiService } from '../api/post-api.service';
import {
  loadAllSuccess,
  loadByUserSuccess,
  loadOneSuccess,
} from '../api/posts-api.actions';
import { displayUserList } from '../../users/pages/user-list/user-list.actions';
import { displayUserDetail } from '../../users/pages/user-detail/user-detail.actions';

@Injectable()
export class PostsEffects {
  loadAll$ = createEffect(() =>
    this.action$.pipe(
      ofType(displayPostList),
      exhaustMap(() =>
        this.postApi.all().pipe(map((posts) => loadAllSuccess({ posts })))
      )
    )
  );

  loadOne$ = createEffect(() =>
    this.action$.pipe(
      ofType(displayPostDetail),
      concatLatestFrom(() => this.store.select(PostsFeature.selectEntities)),
      mergeMap(([action, entities]) => {
        const post = entities[action.id];
        return post
          ? EMPTY
          : this.postApi
              .one(action.id)
              .pipe(map((post) => loadOneSuccess({ post })));
      })
    )
  );

  loadByUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(displayUserDetail),
      mergeMap(({ userId }) =>
        this.postApi
          .byUser(userId)
          .pipe(map((posts) => loadByUserSuccess({ userId, posts })))
      )
    )
  );

  constructor(
    private action$: Actions,
    private postApi: PostApiService,
    private store: Store
  ) {}
}
