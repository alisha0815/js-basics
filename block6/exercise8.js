var obj = { a: 20, b: 26, c: 0 };

function last(obj) {
  for (var item in obj) {
    var newObj = {};
    // the array of keys of the object
    var keyArr = Object.keys(item);
    var lastKey = keyArr.pop();

    // the array of values of the object
    var valueArr = Object.values(item);
    var lastValue = valueArr.pop();
    newObj[lastKey] = lastValue;
  }
  return newObj;
}
module.exports = {
  last,
};
