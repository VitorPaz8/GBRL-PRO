const createProxy = require('../utils/createProxy');

module.exports = function (app) {
  app.use(...createProxy({
    path: '/payment',
    target: 'http://paymentservice:8085',
  }));
};