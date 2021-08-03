function longestString(arr, minLength) {
  let longest = "";
  let longerArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index].length > minLength) {
      longest = arr[index];
      longerArr.push(longest);
    }
    var lastElement = longerArr[longerArr.length - 1];
  }
  return lastElement;
}

// write a function called longestString which takes an array and minLength as the arguments
// and returns the last element from the array with length bigger than minLength:

module.exports = {
  longestString,
};
