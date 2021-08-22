import { createAction, props } from '@ngrx/store';
import { PostComment } from './comment';

export const loadByPostSuccess = createAction(
  '[Comments API] Load by Post Success',
  props<{ postId: number; comments: PostComment[] }>()
);
