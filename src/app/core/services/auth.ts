import { Injectable, computed, inject, signal } from '@angular/core';
import { UserService } from './user';
import { User } from '../../shared/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private userService = inject(UserService);
  private user = signal<User | null>(null);

  isLoggedIn = computed(() => this.user() !== null);
  currentUser = computed(() => this.user());

  login(email: string, passsword: string): boolean {
    const isUser = this.userService.validateCredentials(email, passsword);

    if (!isUser) {
      return false;
    }

    this.user.set(isUser);
    return true;
  }

  setSession(user: User): void {
    this.user.set(user);
  }

  logout(): void {
    this.user.set(null);
  }
}
