'use strict';

var env = process.env.NODE_ENV;

module.exports = function (environment) {
  environment = environment || [];

  return function (req, res, next) {
    if (!req.secure) {
      if (environment && typeof environment === 'string' && environment === env) {
        res.redirect(301, 'https://' + req.host + req.url);
      } else if (environment && Array.isArray(environment) && environment.length && environment.indexOf(env) !== -1) {
        res.redirect(301, 'https://' + req.host + req.url);
      } else {
        next();
      }
    } else {
      next();
    }
  }
};