'use strict';

var should = require('should');

var express = require('express');
var request = require('supertest');
var forceHTTPS = require('../index.js');

describe('Force SSL redirect', function () {
  var app, server;

  beforeEach(function () {
    app = express();

    app.use(forceHTTPS('testing'));

    app.get('/', function (req, res) {
      res.send('Hello World!');
    });

    server = app.listen(3000);
  });

  it('should redirect HTTP requests', function (done) {
    request(app)
      .get('/')
      .set('x-forwarded-proto', 'http')
      .expect(301)
      .end(function (err, res) {
        should.not.exist(err);

        res.text.should.equal('Moved Permanently. Redirecting to https://127.0.0.1/');
        done();
      });
  });
});