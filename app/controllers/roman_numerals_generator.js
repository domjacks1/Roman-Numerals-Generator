const romanNumerals = {
  1: "I",
  4: "IV",
  5: "V"
}

class RomanNumeralGenerator {

  static generate(number) {

    if (number < 1) {
      throw new Error("Number must be bigger than 0");
    }

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
