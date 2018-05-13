const romanNumerals = {
  1: "I",
  4: "IV",
  5: "V"
}

class RomanNumeralGenerator {

  static generate(number) {

    const keys = Object.keys(romanNumerals).reverse();

    var result = ""

    for (var i = 0; i < keys.length; i++) {
      while (number >= keys[i]) {
        number = number - keys[i]
        result = result + romanNumerals[keys[i]]
      }
    }

    return result
  }
}

module.exports = RomanNumeralGenerator;
