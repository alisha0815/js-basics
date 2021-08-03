// Define a variable called arr and assign it the value as shown in the example.
// Define a variable called arr2 and assign it the value as shown in the example.
// Define a variable called pos and give it a value of 2.

arr = ["banana", "apple", "orange"];
arr2 = ["tv", "dvd-player", "playstation"];
pos = 2;

// Define a function called swap.
// Inside it, create a variable called temp, and assign to it the value of arr at index pos.
// Assign the value of arr2 at index pos to arr at index pos.
// Assign the value of temp to arr2 at index pos.
// Place the two arrays in another array

function swap(arr, arr2, pos) {
  let temp = arr2[pos];
  arr2[pos] = arr[pos];
  arr[pos] = temp;
  return [arr, arr2];
}

module.exports = {
  swap,
};
