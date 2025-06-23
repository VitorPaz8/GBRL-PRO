const createProxy = require('../utils/createProxy');

module.exports = function (app) {
  app.use(...createProxy({
    path: '/user',
    target: 'http://userservice:8087',
  }));
};