const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function createProxy({ path, target, rewrite = true }) {
  return [
    path,
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: rewrite ? { [`^${path}`]: '' } : undefined,
    }),
  ];
};