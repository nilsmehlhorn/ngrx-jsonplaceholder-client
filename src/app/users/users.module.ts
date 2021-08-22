import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostDataModule } from '../post-data/post-data.module';
import { UserDataModule } from '../user-data/user-data.module';
import { UserDetailModule } from './pages/user-detail/user-detail.module';
import { UserListModule } from './pages/user-list/user-list.module';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    UserListModule,
    UserDetailModule,
    UserDataModule,
    PostDataModule,
  ],
})
export class UsersModule {}
