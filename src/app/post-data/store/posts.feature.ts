import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { normalize } from '../../util/normalize';
import { Post } from '../api/post';
import { loadAllSuccess, loadByUserSuccess, loadOneSuccess } from '../api/posts-api.actions';

export interface Posts {
  [key: number]: Post;
}

export interface PostsState {
  entities: Posts;
}

const initialState: PostsState = {
  entities: {},
};

const feature = createFeature({
  name: 'posts',
  reducer: createReducer(
    initialState,
    on(loadAllSuccess, (state, action) => ({
      ...state,
      entities: normalize(action.posts, post => post.id),
    })),
    on(loadOneSuccess, (state, action) => ({
      ...state,
      entities: {
        ...state.entities,
        [action.post.id]: action.post,
      },
    })),
    on(loadByUserSuccess, (state, action) => {
      const userEntities = normalize(action.posts, post => post.id);
      return {
        ...state,
        entities: {
          ...state.entities,
          ...userEntities
        }
      }
    })
  ),
});

export const PostsFeature = {
  ...feature,
  selectOne: (id: number) =>
    createSelector(feature.selectEntities, (entities) => entities[id]),
};
