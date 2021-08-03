function twoArrays(arr1, arr2) {
  let count = 0;
  // if (arr1.length == arr2.length) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      count++;
    }
  }
  // } else {
  // return count;
  // }
  return count;
}

module.exports = {
  twoArrays,
};
