function removeFirstAndLast(arr) {
  arr.splice(0, 1);
  arr.splice(-1, 1);
  return arr;
}
module.exports = {
  removeFirstAndLast,
};
