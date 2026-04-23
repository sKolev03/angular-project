import { Component, inject} from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private authService = inject(AuthService);

  isLoggedIn = this.authService.isLoggedIn;
}
