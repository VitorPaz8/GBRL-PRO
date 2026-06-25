const createProxy = require('../utils/createProxy');

module.exports = function (app) {
  app.use(...createProxy({
    path: '/order',
    target: 'http://orderservice:8084',
  }));
};