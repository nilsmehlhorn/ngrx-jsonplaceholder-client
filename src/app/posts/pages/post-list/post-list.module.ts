import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { PostCardModule } from '../../../shared/post-card/post-card.module';
import { PostListComponent } from './post-list.component';

@NgModule({
  imports: [CommonModule, PostCardModule],
  declarations: [PostListComponent],
  exports: [PostListComponent],
})
export class PostListModule {}
