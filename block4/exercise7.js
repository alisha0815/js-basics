function booleanChecker(arr, maxCapacity) {
  let bools = [];
  arr.forEach((item) => {
    if (typeof item === "boolean") {
      if (bools.length < maxCapacity) {
        bools.push(item);
      }
    }
  });
  var count = bools.length;
  var booleanEle = bools.join(",");
  return `${count} booleans were found ${booleanEle}`;
}

// Define a function called 'boolanChecker' which takes 2 arguments, an array and a number ('max').
// Inside it define an array called 'bools'.
// Loop through the array (argument) and for each iteration check if the typeof each element is a boolean.
// If it is and the length of the 'bools' array is still not less than 'max', push the element.
// Make up the sentence as required using the 'bools' array.
// Return the sentence.

module.exports = {
  booleanChecker,
};
