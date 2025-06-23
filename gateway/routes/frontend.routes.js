const createProxy = require('../utils/createProxy');

module.exports = function (app) {
  app.use(...createProxy({
    path: '/',
    target: 'http://frontend:4000',
    rewrite: false // mantém o path
  }));
};