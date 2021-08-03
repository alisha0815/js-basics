function twoArrays(arrOne, arrTwo) {
  let count = 0;
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] == arrTwo[i]) {
      count += 1;
    }
  }
  return count;
}
module.exports = {
  twoArrays,
};
