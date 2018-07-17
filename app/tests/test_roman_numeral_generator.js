const assert = require('assert')
const { expect } = require('chai')

var romanNumeralGenerator = require('../controllers/roman_numerals_generator.js');

describe('Test Roman Numeral Generator', function() {
  it('should return I when given 1', function() {
    assert.equal(romanNumeralGenerator.generate(1), "I")
  })

  it('should return II when given 2', function() {
    assert.equal(romanNumeralGenerator.generate(2), "II")
  })

  it('should return III when given 3', function() {
    assert.equal(romanNumeralGenerator.generate(3), "III")
  })

  it('should return IV when given 4', function() {
    assert.equal(romanNumeralGenerator.generate(4), "IV")
  })

  it('should return V when given 5', function() {
    assert.equal(romanNumeralGenerator.generate(5), "V")
  })

  it('should return VI when given 6', function() {
    assert.equal(romanNumeralGenerator.generate(6), "VI")
  })

  it('should throw error when given 0', function() {
    var errorThrowingFunction = () => romanNumeralGenerator.generate(0)
    expect(errorThrowingFunction).to.throw()
  })

  it('should throw error when given 4000', function() {
    var errorThrowingFunction = () => romanNumeralGenerator.generate(4000)
    expect(errorThrowingFunction).to.throw()
  })

  it('should throw error when given -1', function() {
    var errorThrowingFunction = () => romanNumeralGenerator.generate(-1)

    expect(errorThrowingFunction).to.throw()
  })

  it('should throw error when not given a number', function() {
    var errorThrowingFunction = () => romanNumeralGenerator.generate("hello")
    expect(errorThrowingFunction).to.throw()
  })

  it('should return IX when given 9', function() {
    assert.equal(romanNumeralGenerator.generate(9), "IX")
  })

  it('should return X when given 10', function() {
    assert.equal(romanNumeralGenerator.generate(10), "X")
  })

  it('should return XL when given 40', function() {
    assert.equal(romanNumeralGenerator.generate(40), "XL")
  })

  it('should return L when given 50', function() {
    assert.equal(romanNumeralGenerator.generate(50), "L")
  })

  it('should return XC when given 90', function() {
    assert.equal(romanNumeralGenerator.generate(90), "XC")
  })

  it('should return C when given 100', function() {
    assert.equal(romanNumeralGenerator.generate(100), "C")
  })

  it('should return CD when given 400', function() {
    assert.equal(romanNumeralGenerator.generate(400), "CD")
  })

  it('should return D when given 500', function() {
    assert.equal(romanNumeralGenerator.generate(500), "D")
  })

  it('should return CM when given 900', function() {
    assert.equal(romanNumeralGenerator.generate(900), "CM")
  })

  it('should return M when given 1000', function() {
    assert.equal(romanNumeralGenerator.generate(1000), "M")
  })

  it('should return MMMCMXCIX when given 3999', function() {
    assert.equal(romanNumeralGenerator.generate(3999), "MMMCMXCIX")
  })

  it('should correctly convert String of number into Number', function() {
    assert.equal(romanNumeralGenerator.generate("3999"), "MMMCMXCIX")
  })
})
