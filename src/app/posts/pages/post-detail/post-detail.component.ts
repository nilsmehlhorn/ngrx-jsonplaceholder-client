import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { isDefined } from '../../../util/assertions';
import { PostWithComments } from '../../models/posts';
import { selectPostWithComments } from '../../store/posts.selectors';
import { displayPostDetail } from './post-detail.actions';

@Component({
  selector: 'app-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent {
  post$: Observable<PostWithComments> = EMPTY;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.post$ = this.route.params.pipe(
      tap(({ id }) => this.store.dispatch(displayPostDetail({ id }))),
      switchMap(({ id }) => this.store.select(selectPostWithComments(id))),
      filter(isDefined)
    );
  }
}
