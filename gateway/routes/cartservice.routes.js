const createProxy = require('../utils/createProxy');

module.exports = function (app) {
  app.use(...createProxy({
    path: '/cart',
    target: 'http://cartservice:8082',
  }));
};