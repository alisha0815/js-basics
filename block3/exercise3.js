function isEven(arr) {
  count = 0;
  arr.forEach((element) => {
    if (element % 2 == 0) {
      return (count += 1);
    } else {
      return count == 0;
    }
  });
  return count;
}
module.exports = {
  isEven,
};
