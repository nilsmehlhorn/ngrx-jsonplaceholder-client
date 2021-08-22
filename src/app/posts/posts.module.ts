import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentDataModule } from '../comment-data/comment-data.module';
import { PostDataModule } from '../post-data/post-data.module';
import { PostDetailModule } from './pages/post-detail/post-detail.module';
import { PostListModule } from './pages/post-list/post-list.module';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostsRoutingModule,
    PostListModule,
    PostDetailModule,
    PostDataModule,
    CommentDataModule
  ],
})
export class PostsModule {}
