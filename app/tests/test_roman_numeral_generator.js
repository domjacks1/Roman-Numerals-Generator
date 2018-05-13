const assert = require('assert');
const { expect } = require('chai')

var romanNumeralGenerator = require('../controllers/roman_numerals_generator.js');


describe('Test Roman Numeral Generator', function() {
  it('should return I when given 1', function() {
    assert.equal(romanNumeralGenerator.generate(1), "I");
  });

  it('should return II when given 2', function() {
    assert.equal(romanNumeralGenerator.generate(2), "II");
  });

  it('should return III when given 3', function() {
    assert.equal(romanNumeralGenerator.generate(3), "III");
  });

  it('should return IV when given 4', function() {
    assert.equal(romanNumeralGenerator.generate(4), "IV");
  });

  it('should return V when given 5', function() {
    assert.equal(romanNumeralGenerator.generate(5), "V");
  });

  it('should return VI when given 6', function() {
    assert.equal(romanNumeralGenerator.generate(6), "VI");
  });

  it('should throw error when given 0', function() {
    var errorThrowingFunction = function() {
      romanNumeralGenerator.generate(0)
    };

    expect(errorThrowingFunction).to.throw()
  });

  it('should throw error when given 4000', function() {
    var errorThrowingFunction = function() {
      romanNumeralGenerator.generate(4000)
    };

    expect(errorThrowingFunction).to.throw()
  });

  it('should throw error when given -1', function() {
    var errorThrowingFunction = function() {
      romanNumeralGenerator.generate(-1)
    };

    expect(errorThrowingFunction).to.throw()
  });
});
