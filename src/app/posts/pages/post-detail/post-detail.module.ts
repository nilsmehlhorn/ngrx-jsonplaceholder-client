import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PostDetailComponent } from './post-detail.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [PostDetailComponent],
  exports: [PostDetailComponent],
})
export class PostDetailModule {}
