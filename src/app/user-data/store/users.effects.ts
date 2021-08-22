import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, merge } from 'rxjs';
import { exhaustMap, map, mergeMap } from 'rxjs/operators';
import { loadAllUsersSuccess, loadUserSuccess } from '../api/user-api.actions';
import { UserApiService } from '../api/user-api.service';
import { displayUserDetail } from '../../users/pages/user-detail/user-detail.actions';
import { displayUserList } from '../../users/pages/user-list/user-list.actions';
import { UsersFeature } from './users.feature';

@Injectable()
export class UsersEffects {
  loadAll$ = createEffect(() =>
    this.action$.pipe(
      ofType(displayUserList),
      exhaustMap(() =>
        this.usersApi.all().pipe(map((users) => loadAllUsersSuccess({ users })))
      )
    )
  );

  loadOne$ = createEffect(() =>
    this.action$.pipe(
      ofType(displayUserDetail),
      concatLatestFrom(() => this.store.select(UsersFeature.selectEntities)),
      mergeMap(([{ userId }, entities]) => {
        const user = entities[userId];
        return user
          ? EMPTY
          : this.usersApi
              .one(userId)
              .pipe(map((user) => loadUserSuccess({ user })));
      })
    )
  );

  constructor(
    private action$: Actions,
    private usersApi: UserApiService,
    private store: Store
  ) {}
}
