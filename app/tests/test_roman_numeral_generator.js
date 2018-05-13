var assert = require('assert');

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
});
