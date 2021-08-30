var obj = { a: 1, b: 20, c: 3, d: 4, e: 1, f: 4 };

function sort(obj) {
  var arrObj = Object.entries(obj);
  let result = arrObj.sort((a, b) => a[1] - b[1]);
  console.log(result);
  console.log(Object.fromEntries(result));
  return Object.fromEntries(result);
  //   console.log(sortValues);
  //    [ 1, 1, 3, 4, 4, 20 ]
}
module.exports = {
  sort,
};

// define a function called 'sort' which takes an object as argument.

// inside it declare an empty array called 'arr'.

// loop inside the object and for each iteration push an array which contains the key and the value to 'arr'.

// Sort the array numerically by the object value (position one in our nested arrays)

// create an empty object called 'newObj'.

// Loop through the array and for each iteration assign the first and second element as the key and value respectively to our 'newobJ'

// return the 'newObj'.
