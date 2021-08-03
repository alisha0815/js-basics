let birth_year = 1980;
let now = 2021;
let name = "Alisha";

var getAge = function (birth_year, now, name) {
  let age = now - birth_year;
  let greeting = `Hello ${name} you are ${age} years old`;
  return greeting;
};

module.exports = {
  name,
  birth_year,
  getAge,
};
