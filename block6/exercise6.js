var arrObj = [{ name: "Antonello" }, { name: "George" }, { name: "Golda" }];

function getIndex(arrObj, key, value) {
  arrObj.forEach((obj) => {
    for (var name in obj) {
      if (name == key && obj[name] == value) {
        break;
      }
    }
    return arrObj.indexOf(obj);
  });
}
module.exports = {
  getIndex,
};

// Declare a function  called 'getIndex' which takes 3 arguments: an array, a key and a value.
// Declare a variable called 'index' and give it a value of -1.

// Using a 'for' loop, loop through the array and for each iteration check if the element at the passed key has the passed value.

// If you find a match set 'index' to the current index in the loop and break from the loop using the keyword 'break';

// Outside the loop return 'index'.
