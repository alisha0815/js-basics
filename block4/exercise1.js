function check_who_is_older(name, age, name2, age2) {
  if (age > age2) {
    return `${name} age ${age} is older than ${name2} age ${age2}`;
  } else {
    return `${name2} age ${age2} is older than ${name} age ${age}`;
  }
}
module.exports = {
  check_who_is_older,
};
