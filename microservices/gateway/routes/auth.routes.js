const createProxy = require('../utils/createProxy');

module.exports = function (app) {
  app.use(...createProxy({
    path: '/auth',
    target: 'http://authservice:8080',
  }));
};