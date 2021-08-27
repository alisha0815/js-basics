let test = (obj) => {
  if (!obj || Object.values(obj).length === 0) {
    return 0;
  }
};
function sumAll(obj) {
  if (test(obj)) {
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

//======================  EXAMPLE  ========================
// sumAll({a: 20, b: 26, c: 0})
// 46 // <======  EXPECTED OUTPUT
// sumAll({a: 20, b: 26, c: -56})
// -10 // <======  EXPECTED OUTPUT
// sumAll({})
// 0 // <======  EXPECTED OUTPUT
// sumAll()
// 0 // <======  EXPECTED OUTPUT
//=========================================================
