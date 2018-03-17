var expect = require('chai').expect;
var axios = require('axios');
var api = 'http://localhost:3000/api';

describe('Temperature converter API', function () {
  describe('Celsius to Fahrenheit', function () {
    it('Should return status 200', function (done) {
      var temperature = 100;
      axios
        .get(`${api}/toF/${temperature}`)
        .then(function (response) {
          expect(response.status).to.equal(200);
          done();
        })
        .catch(function (err) {
          done(err);
        });
    });

    it('Should convert 100C to F', function (done) {
      var temperature = 100;
      axios
        .get(`${api}/toF/${temperature}`)
        .then(function (response) {
          expect(response.data).to.equal(212);
          done();
        })
        .catch(function (err) {
          done(err);
        });
    });
  });

  describe('Fahrenheit to Celsius', function () {
    it('Should return status 200', function (done) {
      var temperature = 212;
      axios
      .get(`${api}/toC/${temperature}`)
      .then(function (response) {
          expect(response.status).to.equal(200);
          done();
        })
        .catch(function (err) {
          done(err);
        });
    });

    it('Should convert 212F to C', function (done) {
      var temperature = 212;
      axios
        .get(`${api}/toC/${temperature}`)
        .then(function (response) {
          expect(response.data).to.equal(100);
          done();
        })
        .catch(function (err) {
          done(err);
        });
    });
  });
});
