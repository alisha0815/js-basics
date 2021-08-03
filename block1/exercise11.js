var toCelsius = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius.round;
};

// 	Deduct 32, then multiply by 5, then divide by 9
var toFahr = function (celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit.round;
};

// Divide by 5, then multiply by 9, then add 32
module.exports = {
  celsius,
  fahrenheit,
  toCelsius,
  toFahr,
};
