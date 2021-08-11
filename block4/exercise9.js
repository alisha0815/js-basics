function uniqueElements(arr, max) {
  let newArr = [];
  let uniqueArr = new Map();
  arr.forEach((name) => {
    if (!uniqueArr[name]) {
      uniqueArr[name] = true;
      if (typeof name === "number" && name >= max) {
        newArr.push(name);
      }
    }
  });
  return `old array ${arr.join(",")}, new array ${newArr.join(",")}`;
}

module.exports = {
  uniqueElements,
};

// Define a function called 'uniqueElements' which takes an array and a number ('max') as arguments.
// Inside it create an array called 'newArr'
// Loop inside the array (argument) and for each iteration check if the element is
//  not present in the 'newArr',

// if it is a number,
// and that the element is bigger or equal to 'max', if all is ok push it in.

// Make up the sentence as required using the 'newArr' array.
// Return the sentence.
