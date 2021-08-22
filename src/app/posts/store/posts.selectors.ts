import { createSelector } from '@ngrx/store';
import { CommentsFeature } from '../../comment-data/store/comments.feature';
import { PostsFeature } from '../../post-data/store/posts.feature';
import { PostWithComments } from '../models/posts';

export const selectPostWithComments = (id: number) =>
  createSelector(
    PostsFeature.selectOne(id),
    CommentsFeature.selectByPost(id),
    (post, comments): PostWithComments | undefined => {
      return post && comments ? { ...post, comments } : undefined;
    }
  );
