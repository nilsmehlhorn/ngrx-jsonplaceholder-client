import { createAction, props } from '@ngrx/store';
import { User } from './user';

export const loadAllUsersSuccess = createAction(
  '[User API] Load All Success',
  props<{ users: User[] }>()
);

export const loadUserSuccess = createAction(
  '[User API] Load One Success',
  props<{ user: User }>()
);
