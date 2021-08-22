import { createAction, props } from '@ngrx/store';

export const displayUserDetail = createAction(
  '[User Detail Page] Display',
  props<{ userId: number }>()
);
