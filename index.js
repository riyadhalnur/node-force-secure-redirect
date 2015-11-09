'use strict';

var env = process.env.NODE_ENV;

module.exports = function redirect(environment) {
  environment = environment || [];

  return function (req, res, next) {
    var url = 'https://' + req.hostname + req.url;

    if (!req.secure && req.get('x-forwarded-proto') && (req.get('x-forwarded-proto') !== 'https')) {
      if (environment && typeof environment === 'string' && environment === env) {
        res.redirect(301, url);
      } else if (environment && Array.isArray(environment) && environment.length && environment.indexOf(env) !== -1) {
        res.redirect(301, url);
      } else {
        next();
      }
    } else {
      next();
    }
  }
};
