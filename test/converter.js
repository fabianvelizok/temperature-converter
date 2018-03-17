var expect = require('chai').expect;
// (..) Find the main property in package.json 
var converter = require('..'); 


describe('Temperature converter', function () {
  describe('Celsius to Fahrenheit', function () {
    it('Should convert 100C to F', function () {
      var fh = converter.toF(100);
      expect(fh).to.equal(212);
    });
  });

  describe('Fahrenheit to Celsius', function () {
    it('Should convert 212F to C', function () {
      var c = converter.toC(212);
      expect(c).to.equal(100);
    })
  });
});