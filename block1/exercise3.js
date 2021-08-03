let date_of_birth = 1984;
let future_year = 2021;

var ageCalc = function (date_of_birth, future_year) {
  // your code goes here
  let age = future_year - date_of_birth;
  // and return something :)
  return age;
};

module.exports = {
  ageCalc,
  date_of_birth,
  future_year,
};
