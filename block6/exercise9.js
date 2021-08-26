function sumAll(obj) {
  if (Object.values(obj) === 0 || obj === null) {
    return 0;
  } else {
    var sum = 0;
    for (var num in obj) {
      sum += obj[num];
    }
    return sum;
  }
}
module.exports = {
  sumAll,
};

// Define a function called 'sumAll' which takes an object as argument.
// Then do some checks:
// if the object is empty return 0;
// if the object has only one value then return that.
// if the object has more then you can loop and sum them.
// return the sum.
