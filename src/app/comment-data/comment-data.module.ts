import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostsEffects } from '../post-data/store/posts.effects';
import { CommentApiService } from './api/comment-api.service';
import { CommentsEffects } from './store/comments.effects';
import { CommentsFeature } from './store/comments.feature';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(CommentsFeature.name, CommentsFeature.reducer),
    EffectsModule.forFeature([PostsEffects, CommentsEffects]),
  ]
})
export class CommentDataModule {}
