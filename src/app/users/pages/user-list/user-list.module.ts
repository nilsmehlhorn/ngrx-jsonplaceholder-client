import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';

@NgModule({
  declarations: [UserListComponent],
  exports: [UserListComponent],
  imports: [CommonModule, RouterModule, MatListModule, MatIconModule],
})
export class UserListModule {}
