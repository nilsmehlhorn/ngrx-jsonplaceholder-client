import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Users, UsersFeature } from '../../../user-data/store/users.feature';
import { displayUserList } from './user-list.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<Users>;

  constructor(private store: Store) {
    this.users$ = this.store.select(UsersFeature.selectEntities);
  }

  ngOnInit(): void {
    this.store.dispatch(displayUserList());
  }
}
