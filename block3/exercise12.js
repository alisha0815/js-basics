function reverser(string) {
  var arr = [];
  for (let index = string.length - 1; index > 0; index--) {
    arr.push(string[index]);
  }
  return arr.join("");
}

// Declare a function called reverser which takes a string as argument (str).
// Inside it declare an empty array,
// Using a for loop set the i to be equal to the string length and loop until i is greater or equal than 0, decreasing i's value by one each time the loop runs.
// Inside the loop push each element of str to our empty array.
// Join our array to make it a string and return it.
module.exports = {
  reverser,
};
