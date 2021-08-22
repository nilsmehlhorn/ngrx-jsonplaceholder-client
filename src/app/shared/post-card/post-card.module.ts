import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { PostCardComponent } from './post-card.component';

@NgModule({
  declarations: [PostCardComponent],
  exports: [PostCardComponent],
  imports: [CommonModule, RouterModule, MatCardModule],
})
export class PostCardModule {}
