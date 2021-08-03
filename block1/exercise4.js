let age = 39;
let end_age = 80;
let teas_day = 3;

var howManyTeas = function (age, end_age, teas_day) {
  let dayPeriod = (end_age - age) * 365;
  let amountTea = teas_day * dayPeriod;
  return amountTea;
};

module.exports = {
  howManyTeas,
  age,
  end_age,
  teas_day,
};
