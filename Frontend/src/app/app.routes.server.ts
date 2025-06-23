// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Páginas públicas com SSR (ótimo para SEO)
  {
    path: '',
    renderMode: RenderMode.Server
  },
  {
    path: 'inicio',
    renderMode: RenderMode.Server
  },
  {
    path: 'produto', // matches /produto/:id
    renderMode: RenderMode.Server
  },
  {
    path: 'login',
    renderMode: RenderMode.Server
  },
  {
    path: 'primeiro-acesso',
    renderMode: RenderMode.Server
  },

  // Páginas privadas dentro de 'app/' com CSR (não renderiza no servidor)
  {
    path: 'app/dashboard',
    renderMode: RenderMode.Client
  },
  {
    path: 'app/carrinho',
    renderMode: RenderMode.Client
  },
  {
    path: 'app/pagamento',
    renderMode: RenderMode.Client
  },

  // APIs ou rotas dinâmicas fora do Angular (SSR seguro)
  {
    path: 'api/**',
    renderMode: RenderMode.Server
  },

  // Fallback para tudo que não foi especificado explicitamente
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];

export const serverConfig = {
  timeout: 10000,
  cacheConfig: {
    public: {
      maxAge: 3600, // 1 hora
      staleWhileRevalidate: 86400 // 24 horas
    },
    private: {
      maxAge: 0,
      staleWhileRevalidate: 0
    }
  }
};
