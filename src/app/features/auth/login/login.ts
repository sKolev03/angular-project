import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';

  onLogin(): void {
    const success = this.authService.login(this.email, this.password);

    if (success) {
      this.router.navigate(['/themes']);
    } else {
      alert('Invalid email or password');
    }
  }
}
