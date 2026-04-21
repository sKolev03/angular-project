import { Component, OnInit } from '@angular/core';
import { Api } from '../../../core/services/api';
import { Theme } from '../../../shared/interfaces/themes';

@Component({
  selector: 'app-themes-list',
  imports: [],
  templateUrl: './themes-list.html',
  styleUrl: './themes-list.css',
})
export class ThemesList implements OnInit{
  themes: Theme[] = [];

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.api.getThemes().subscribe((themes) => {
      this.themes = themes.sort(
        (a, b) => b.subscribers.length - a.subscribers.length
      )
    });
  }
}
