import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
