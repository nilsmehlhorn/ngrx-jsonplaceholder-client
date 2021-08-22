import { createAction, props } from '@ngrx/store';
import { Post } from './post';

export const loadAllSuccess = createAction(
  '[Posts API] Load All Success',
  props<{ posts: Post[] }>()
);

export const loadByUserSuccess = createAction(
  '[Posts API] Load By User Success',
  props<{ userId: number; posts: Post[] }>()
);

export const loadOneSuccess = createAction(
  '[Posts API] Load One Success',
  props<{ post: Post }>()
);
