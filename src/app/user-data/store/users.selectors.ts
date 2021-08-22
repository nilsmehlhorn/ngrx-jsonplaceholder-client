import { createSelector } from '@ngrx/store';
import { Post } from '../../post-data/api/post';
import { PostsFeature } from '../../post-data/store/posts.feature';
import { User } from '../api/user';
import { UsersFeature } from './users.feature';

export interface UserWithPosts extends User {
  posts: Post[];
}

export const selectUserWithPosts = (userId: number) =>
  createSelector(
    UsersFeature.selectOne(userId),
    PostsFeature.selectEntities,
    (user, posts): UserWithPosts | undefined => {
      if (!user) {
        return undefined;
      }
      const { postIds, ...userProps } = user;
      return {
        ...userProps,
        posts: postIds.map((id) => posts[id]),
      };
    }
  );
