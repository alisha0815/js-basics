// write a function called isString which takes an array as argument.
var anyArr = ["one", 5, "two", 6, "three", true, "four"];

function isString(arr) {
  let new_array = [];
  arr.forEach((element) => {
    if (typeof element == "string") {
      return new_array.push(element);
    } else {
      return new_array;
    }
  });
  return new_array;
}

// if (typeof a_string == "string") {
// This is a string.
// inside it write a forEach loop that loops through this example array and
// checks if the type of each element is a string,
// every time it finds a string it pushes it into an array.
// return that array
// you can refer to the example in EXERCISE 3 for the simple if statement if you wish.

module.exports = {
  isString,
};
