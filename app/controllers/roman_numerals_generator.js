class RomanNumeralGenerator {

  static generate(number) {

    var result = ""

    for (var i = 0; i < number; i++) {
      result += "I"
    }

    return result

  }
}

module.exports = RomanNumeralGenerator;
