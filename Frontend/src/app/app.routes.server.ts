import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Páginas públicas - SSR para melhor SEO
  {
    path: '',
    renderMode: RenderMode.Server
  },
  {
    path: 'products',
    renderMode: RenderMode.Server
  },
  {
    path: 'product-page/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'login',
    renderMode: RenderMode.Server
  },
  {
    path: 'first-login',
    renderMode: RenderMode.Server
  },
  
  // Páginas privadas - CSR para melhor interatividade
  {
    path: 'dashboard',
    renderMode: RenderMode.Client
  },
  {
    path: 'carrinho',
    renderMode: RenderMode.Client
  },
  {
    path: 'pagamento',
    renderMode: RenderMode.Client
  },

  // Rotas de API ou dados dinâmicos - Prerendering não é adequado
  {
    path: 'api/**',
    renderMode: RenderMode.Server
  },

  // Rotas com parâmetros dinâmicos
  {
    path: 'product/**',
    renderMode: RenderMode.Server
  },

  // Fallback para rotas não especificadas - SSR por padrão
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];

// Configurações adicionais para otimização
export const serverConfig = {
  // Timeout para renderização no servidor (em ms)
  timeout: 10000,
  
  // Configurações de cache para diferentes tipos de página
  cacheConfig: {
    // Páginas públicas podem ser cacheadas por mais tempo
    public: {
      maxAge: 3600, // 1 hora
      staleWhileRevalidate: 86400 // 24 horas
    },
    // Páginas privadas não devem ser cacheadas
    private: {
      maxAge: 0,
      staleWhileRevalidate: 0
    }
  }
};