function swap(obj) {
  let newObj = {};
  for (var item in obj) {
    let newKeys = obj[item];
    let newValues = item;
    newObj[newKeys] = newValues;
  }
  return newObj;
}
module.exports = {
  swap,
};

// create a function called 'swap' which takes an object as argument.

// inside it define a new object called 'newObj'.

// loop inside the object (argument)

// for each iteration
// –add the object (argument) key as the 'newObj' value
// –add the the object (argument) value as the 'newObj' key

// outside the loop return 'newObj'
