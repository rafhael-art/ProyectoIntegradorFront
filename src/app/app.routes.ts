import { Routes } from '@angular/router';
import { LoginGuard } from './guard/auth.guard';
export const routes: Routes = [
  {
    path: 'welcome',
    loadComponent: () => import('./pages/pages.component'),
    canActivate: [LoginGuard],
    children: [
      {
        path: 'begin',
        loadComponent: () => import('./pages/home/home.component')
      },
      {
        path: 'nosotros',
        loadComponent: () => import('./pages/home/home.component')
      },
      {
        path: 'empresas',
        loadComponent: () => import('./pages/empresas/empresas.component')
      },
      {
        path: 'noticias',
        loadComponent: () => import('./pages/noticias/noticias.component')
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component')
      },
      {
        path: 'account',
        loadComponent: () => import('./pages/account/account.component')
      },
      {
        path: '',
        redirectTo: 'begin',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }

];
