var obj = { a: 20, b: 26, c: 0 };

function last(obj) {
  // for (var item in obj) {
  var newObj = {};
  // the array of keys of the object
  var keyArr = Object.keys(obj);
  var lastKey = keyArr.pop();

  // the array of values of the object
  var valueArr = Object.values(obj);
  var lastValue = valueArr.pop();
  // newObj[lastKey] = lastValue;
  // }
  return { [lastKey]: lastValue };
}
module.exports = {
  last,
};

//======================  EXAMPLE  ========================
// var obj = {a: 20, b: 26, c: 0}
// last(obj)
// {c:0} // <======  EXPECTED OUTPUT
//{a: 20, b: 26, c: 0}  <====== obj
//=========================================================
