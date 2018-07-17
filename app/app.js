var romanNumeralGenerator = require('./controllers/roman_numerals_generator.js');

console.log(romanNumeralGenerator.generate(Number(process.argv[2])));
