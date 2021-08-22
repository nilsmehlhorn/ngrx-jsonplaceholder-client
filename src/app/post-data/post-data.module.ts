import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostsEffects } from './store/posts.effects';
import { PostsFeature } from './store/posts.feature';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(PostsFeature.name, PostsFeature.reducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
})
export class PostDataModule {}
