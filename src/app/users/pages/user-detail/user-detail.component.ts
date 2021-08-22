import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { isDefined } from '../../../util/assertions';
import {
  selectUserWithPosts,
  UserWithPosts,
} from '../../../user-data/store/users.selectors';
import { displayUserDetail } from './user-detail.actions';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user$: Observable<UserWithPosts> = EMPTY;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.user$ = this.route.params.pipe(
      tap(({ userId }) => this.store.dispatch(displayUserDetail({ userId }))),
      switchMap(({ userId }) => this.store.select(selectUserWithPosts(userId))),
      filter(isDefined)
    );
  }

  ngOnInit(): void {}
}
