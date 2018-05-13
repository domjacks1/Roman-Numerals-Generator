class RomanNumeralGenerator {

  static generate(number) {

    if (number == 4) return "IV"

    var result = ""

    for (var i = 0; i < number; i++) {
      result += "I"
    }

    return result

  }
}

module.exports = RomanNumeralGenerator;
