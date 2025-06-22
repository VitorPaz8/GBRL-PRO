// app.routes.ts

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/public/products/products').then(m => m.Products),
    title: 'Início'
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/public/products/products').then(m => m.Products),
    title: 'Início'
  },
  {
    path: 'produto',
    loadComponent: () => import('./pages/public/product-page/product-page').then(m => m.ProductPage),
    title: 'Produto'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/public/login/login').then(m => m.Login),
    title: 'Login'
  },
  {
    path: 'primeiro-acesso',
    loadComponent: () => import('./pages/public/first-login/first-login').then(m => m.FirstLogin),
    title: 'Primeiro Acesso'
  },

  // Grupo privado com rota guard (se tiver auth)
  {
    path: 'app',
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/private/dashboard/dashboard').then(m => m.Dashboard),
        title: 'Dashboard'
      },
      {
        path: 'carrinho',
        loadComponent: () => import('./pages/private/carrinho/carrinho').then(m => m.Carrinho),
        title: 'Carrinho'
      },
      {
        path: 'pagamento',
        loadComponent: () => import('./pages/private/pagamento/pagamento').then(m => m.Pagamento),
        title: 'Pagamento'
      }
    ]
  },

  // Fallback
  {
    path: '**',
    redirectTo: '/inicio'
  }
];
