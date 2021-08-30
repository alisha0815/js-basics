var obj = { a: 1, b: 2, c: 2 };
console.log(obj);
function splice(obj, start, end) {
  var end = end || 1;
  var arr = Object.entries(obj);
  // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 2 ] ]

  var newObj = {};
  let count = 1;
  for (var key in obj) {
    count++;

    if (start <= arr.length - 1 && end > 0) {
      newObj[key] = obj[key];
    }
    if (start > arr.length - 1 || end === 0) {
    }
  }
  return newObj;
}
// {"a", 1} if start <= arr.length - 1
// var result = splice(obj, 0, 2);

module.exports = {
  splice,
};
