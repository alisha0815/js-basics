function multy(arr, index) {
  var product = 1;
  for (var index = 0; index < arr.length; index++) {
    product *= arr[index];
  }
  return product;
}

module.exports = {
  multy,
};
