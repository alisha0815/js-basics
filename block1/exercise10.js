let now = 2021;
let dob = 1984;
var howManyDays = function (dob, now) {
  let periodDay = (now - dob) * 365;
  let sentence = `you have lived for ${periodDay} days already!`;
  return sentence;
};
module.exports = {
  now,
  dob,
  howManyDays,
};
