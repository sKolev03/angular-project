import { Component, inject, OnInit } from '@angular/core';
import { Api } from '../../../core/services/api';
import { Theme } from '../../../shared/interfaces/themes';
import { Post } from '../../../shared/interfaces/posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theme-content',
  imports: [],
  templateUrl: './theme-content.html',
  styleUrl: './theme-content.css',
})
export class ThemeContent implements OnInit {
  private route = inject(ActivatedRoute);
  private apiService = inject(Api);

  theme: Theme | null = null;
  posts: Post[] = [];
  commentText = '';
  themeId = '';

  ngOnInit(): void {
    this.themeId = this.route.snapshot.params['themeId'];
    this.loadThemeData();
  }

  loadThemeData(): void {
    this.apiService.getThemes().subscribe((themes) => {
      this.theme = themes.find((t) => t._id === this.themeId) || null;
    });
    
    this.apiService.getLatestPosts().subscribe((posts) => {
      this.posts = posts.filter((p) => p.themeId?._id === this.themeId);
    });
  }
}
