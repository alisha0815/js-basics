function strCut(string, indOne, indTwo) {
  arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i == indOne) {
      arr.splice(i, 1);
    }
    if (i == indTwo - 1) {
      arr.splice(i, 1);
    }
  }
  return arr.join("");
}
module.exports = {
  strCut,
};
