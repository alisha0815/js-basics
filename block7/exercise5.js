var arr = ["one", "two", "three", "four"];

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0, i--; ) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

module.exports = {
  shuffle,
};

// == HINT ===

// Use Math.random to generate a random number and Math.floor to round it!

// == STEPS ===

// Create a function called 'shuffle' which takes an array as argument.

// Inside it loop through the array.

// For each iteration generate a random number using Math.random and swap the element at the current index with one at the random index.

// return the array.
