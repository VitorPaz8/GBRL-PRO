const createProxy = require('../utils/createProxy');

module.exports = function (app) {
  app.use(...createProxy({
    path: '/admin',
    target: 'http://admindashboard:8081',
  }));
};