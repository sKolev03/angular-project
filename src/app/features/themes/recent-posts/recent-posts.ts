import { Component, OnInit } from '@angular/core';
import { Api } from '../../../core/services/api';
import { Post } from '../../../shared/interfaces/posts';
import { PostItem } from '../../../shared/components/post-item/post-item';

@Component({
  selector: 'app-recent-posts',
  imports: [PostItem],
  templateUrl: './recent-posts.html',
  styleUrl: './recent-posts.css',
})
export class RecentPosts implements OnInit {
  posts: Post[] = [];

  constructor(private api: Api ) {}

  ngOnInit(): void {
    this.api.getLatestPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
