import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Themes } from './features/themes/themes';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { ThemeContent } from './features/themes/theme-content/theme-content';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    {path: 'home', component: Home},
    
    {path: 'login', component: Login},
    {path: 'register', component: Register},

    {path: 'themes', component: Themes},
    {path: 'themes/:themeId', component: ThemeContent, canActivate: [authGuard]},
];
