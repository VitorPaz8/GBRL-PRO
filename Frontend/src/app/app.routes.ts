import { Routes } from '@angular/router';

export const routes: Routes = [
  // Rotas com layout padrão (header, footer, etc.)
  {
    path: '',
    redirectTo: 'produto',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./pages/public/products/products').then(m => m.Products)
  },
  {
    path: 'produto',
    loadComponent: () => import('./pages/public/products/products').then(m => m.Products)
  },
  {
    path: 'product-page',
    loadComponent: () => import('./pages/public/product-page/product-page').then(m => m.ProductPage)
  },
      {
    path: 'login',
    loadComponent: () => import('./pages/public/login/login').then(m => m.Login)
  },
  {
    path: 'first-login',
    loadComponent: () => import('./pages/public/first-login/first-login').then(m => m.FirstLogin)
  },
  // Rotas privadas com guard
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/private/dashboard/dashboard').then(m => m.Dashboard),
    // canActivate: [authGuard]
  },
  {
    path: 'carrinho',
    loadComponent: () => import('./pages/private/carrinho/carrinho').then(m => m.Carrinho),
    // canActivate: [authGuard]
  },
  {
    path: 'pagamento',
    loadComponent: () => import('./pages/private/pagamento/pagamento').then(m => m.Pagamento),
    // canActivate: [authGuard]
  },
  
  // Rota 404
  {
      path: '',
      loadComponent: () => import('./pages/public/products/products').then(m => m.Products)
    }
];