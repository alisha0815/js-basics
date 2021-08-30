var obj = { a: 1, b: 20, c: 3, d: 4, e: 1, f: 4 };
console.log(obj);

const arrToObj = (arr) => Object.fromEntries(arr);

const sortObjKeysAlphabetically = (obj) =>
  Object.fromEntries(Object.entries(obj).sort());

// console.log(sortObjKeysAlphabetically(obj));
// console.log(Object.entries(obj).sort().reverse());

const sortAlphabeticallyDescending = (obj) =>
  Object.fromEntries(Object.entries(obj).sort().reverse());

function sort(obj, criterion, order) {
  var arrObj = Object.entries(obj);
  console.log(arrObj);
  if (criterion === undefined || order === undefined) {
    return "missing argument here!";
  } else if (criterion !== undefined && order !== undefined) {
    if (criterion == "values") {
      if (order == "ascending") {
        let resultOne = arrObj.sort((a, b) => a[1] - b[1]);
        return arrToObj(resultOne);
      } else if (order == "descending") {
        let resultTwo = arrObj.sort((a, b) => b[1] - a[1]);
        return arrToObj(resultTwo);
      }
    }
    if (criterion == "keys") {
      if (order == "ascending") {
        return sortObjKeysAlphabetically(obj);
      } else if ((order = "descending")) {
        return sortAlphabeticallyDescending(obj);
      }
    }
  }
}

console.log(sort(obj, "values", "ascending"));
module.exports = {
  sort,
};
