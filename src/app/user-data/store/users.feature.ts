import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { loadByUserSuccess } from '../../post-data/api/posts-api.actions';
import { normalize } from '../../util/normalize';
import { User } from '../api/user';
import { loadAllUsersSuccess, loadUserSuccess } from '../api/user-api.actions';

export interface UserState extends User {
  postIds: number[];
}

export interface Users {
  [key: number]: UserState;
}

export interface UsersState {
  entities: Users;
}

const initialState: UsersState = {
  entities: {},
};

const feature = createFeature({
  name: 'users',
  reducer: createReducer(
    initialState,
    on(loadAllUsersSuccess, (state, { users }) => ({
      ...state,
      entities: normalize(
        users.map((user) => ({ ...user, postIds: [] })),
        (user) => user.id
      ),
    })),
    on(loadUserSuccess, (state, { user }) => ({
      ...state,
      entities: {
        [user.id]: {
          ...state.entities[user.id],
          ...user,
        },
      },
    })),
    on(loadByUserSuccess, (state, { userId, posts }) => ({
      ...state,
      entities: {
        ...state.entities,
        [userId]: {
          ...state.entities[userId],
          postIds: posts.map((post) => post.id),
        },
      },
    }))
  ),
});

export const UsersFeature = {
  ...feature,
  selectOne: (id: number) =>
    createSelector(feature.selectEntities, (entities) => entities[id]),
};
