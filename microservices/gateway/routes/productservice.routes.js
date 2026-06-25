const createProxy = require('../utils/createProxy');

module.exports = function (app) {
  app.use(...createProxy({
    path: '/product',
    target: 'http://productservice:8085',
  }));
};