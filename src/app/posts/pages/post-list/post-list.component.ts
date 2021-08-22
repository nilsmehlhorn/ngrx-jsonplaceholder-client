import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostsFeature, Posts } from '../../../post-data/store/posts.feature';
import { displayPostList } from './post-list.actions';

@Component({
  selector: 'app-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts$: Observable<Posts>;

  constructor(private store: Store) {
    this.posts$ = this.store.select(PostsFeature.selectEntities);
  }

  ngOnInit(): void {
    this.store.dispatch(displayPostList());
  }
}
