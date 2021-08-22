import { PostComment } from '../../comment-data/api/comment';
import { Post } from '../../post-data/api/post';

export interface PostWithComments extends Post {
  comments: PostComment[];
}
