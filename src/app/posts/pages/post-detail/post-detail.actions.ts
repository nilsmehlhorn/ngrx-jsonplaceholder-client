import { createAction, props } from '@ngrx/store';

export const displayPostDetail = createAction(
  '[Post Detail Page] Display',
  props<{ id: number }>()
);
