import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostCardModule } from '../../../shared/post-card/post-card.module';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  declarations: [UserDetailComponent],
  exports: [UserDetailComponent],
  imports: [CommonModule, PostCardModule],
})
export class UserDetailModule {}
