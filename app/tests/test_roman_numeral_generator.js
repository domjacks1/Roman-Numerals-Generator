var assert = require('assert');

var romanNumeralGenerator = require('../controllers/roman_numerals_generator.js');


describe('Test Roman Numeral Generator', function () {
 it('should return I when given 1', function () {
        assert.equal(romanNumeralGenerator.generate(1), 1);
    });
});
