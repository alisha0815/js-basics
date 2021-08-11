function filter(arr, type, min) {
  let newArr = [];
  arr.forEach((item) => {
    var itemTyp = typeof item;
    if (itemTyp !== type && item.length >= min) {
      newArr.push(item);
    }
  });
  return newArr;
}

// Define a function called 'filter' which takes 3 arguments: an array, a type and a min-length.
// inside it create a variable called 'newArr' (an empty array)
// use a loop and for each iteration check that the element is not of the type passed as argument
// and that it's length is greater or equal to the min-length passed.
// if it matches these criteria push it in 'newArr'.
// return 'newArr'.

module.exports = {
  filter,
};
