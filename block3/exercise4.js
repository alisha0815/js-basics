var arr = ["one", "two", "three", "four"];

function looper(arr) {
  let count = 0;
  arr.forEach((element, index) => {
    console.log(element, index);
    count += 1;
  });
  return count;
}

// numbers.forEach((number) => console.log(number));
// create a function called looper which takes the array as argument
// inside it write a forEach loop which console.log each element and each
// index for every iteration.
// Inside the function declare a variable called count, and increment it by one
// for each iteration then return count.

module.exports = {
  looper,
  arr,
};
