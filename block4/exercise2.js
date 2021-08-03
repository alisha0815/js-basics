function is_an_even_number(arr) {
  let count = 0;
  arr.forEach((num) => {
    if (num === 0) {
      count += 1;
    }
    if (parseInt(num) % 2 == 0) {
      count += 1;
    } else {
      count;
    }
  });
  return count;
}

// write a function  called is_an_even_number that takes an array as argument,
// it loops through it and checks if the elements are numbers (or a string that can be converted to a number)
// and if they are even.
// you should also keep track of the even numbers by increasing the value of a variable called count, which you should
// return at the end of the function.
// for this exercise we treat number 0  as an even number, but only if it is provided as a zero

//=========================================================

module.exports = {
  is_an_even_number,
};
