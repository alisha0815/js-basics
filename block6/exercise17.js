var obj = { a: 1, b: 20, c: 3, d: 4, e: 1, f: 4 };
// console.log(obj);

const objNumeticallyDescending = (array) => array.sort((a, b) => b[1] - a[1]);
var results = objNumeticallyDescending(Object.entries(obj));
console.log(results[0]);

function biggestNumber(obj) {
  let sorted = objNumeticallyDescending(Object.entries(obj));
  let newObj = {};
  newObj["num"] = sorted[0][1];
  newObj["key"] = sorted[0][0];
  return newObj;
}

module.exports = {
  biggestNumber,
};
