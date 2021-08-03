let age = 40;
let minAge = 18;

var checkAge = function (age, minAge) {
  return age >= minAge;
};

module.exports = {
  checkAge,
  age,
  minAge,
};
