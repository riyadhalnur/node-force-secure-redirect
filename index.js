'use strict';

var env = process.env.NODE_ENV;

module.exports = function (environment) {
  environment = environment || undefined;

  return function (req, res, next) {
    if (!req.secure) {
      if (environment && environment === env) {
        res.redirect(301, 'https://' + req.host + req.url);
      } else if (environment === undefined) {
        res.redirect(301, 'https://' + req.host + req.url);
      } else {
        next();
      }
    } else {
      next();
    }
  }
};