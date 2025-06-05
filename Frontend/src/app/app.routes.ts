import { Routes } from '@angular/router';
import { DefaultLayout } from './layout/default-layout/default-layout';
import { EmptyLayout } from './layout/empty-layout/empty-layout';
import { Login } from './pages/public/login/login';
import { ProductPage } from './pages/public/product-page/product-page';
import { FirstLogin } from './pages/public/first-login/first-login';
import { Dashboard } from './pages/private/dashboard/dashboard';
import { Carrinho } from './pages/private/carrinho/carrinho';
import { Pagamento } from './pages/private/pagamento/pagamento';
import { Products } from './pages/public/products/products';

export const routes: Routes = [
      {
            path: '',
            component: DefaultLayout,
            children: [
                  { path: '', component: Products },
                  { path: 'produto', component: ProductPage },
                  { path: 'login', component: Login },
                  { path: 'cadastro', component: FirstLogin },
                  { path: 'carrinho', component: Carrinho }
            ],
      },
      {
            path: '',
            component: EmptyLayout,
            children: [
                  { path: 'dashboard', component: Dashboard },
                  { path: 'pagamento', component: Pagamento }
            ],
      }
]