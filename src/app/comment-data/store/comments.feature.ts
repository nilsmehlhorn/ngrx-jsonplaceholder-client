import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { PostComment } from '../api/comment';
import { loadByPostSuccess } from '../api/comments-api.action';

export interface CommentsByPost {
  [postId: number]: PostComment[];
}

export interface CommentsState {
  commentsByPost: CommentsByPost;
}

const initialState: CommentsState = {
  commentsByPost: {},
};

const feature = createFeature({
  name: 'comments',
  reducer: createReducer(
    initialState,
    on(loadByPostSuccess, (state, action) => ({
      ...state,
      commentsByPost: {
        ...state.commentsByPost,
        [action.postId]: action.comments,
      },
    })),
  ),
});

export const CommentsFeature = {
  ...feature,
  selectByPost: (postId: number) =>
    createSelector(
      feature.selectCommentsByPost,
      (commentsByPost) => commentsByPost[postId]
    ),
};
