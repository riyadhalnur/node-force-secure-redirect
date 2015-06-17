'use strict';

var env = process.env.NODE_ENV || 'development';

module.exports = function () {
  return function (req, res, next) {
    if (!req.secure) {
      if (env === 'development') {
        next();
      } else {
        res.redirect(301, 'https://' + req.host + req.url);
      }
    } else {
      next();
    }
  }
};