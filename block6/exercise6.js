// var arr = [{ name: "Antonello" }, { name: "George" }, { name: "Golda" }];
function getIndex(arr, key, value) {
  let index = -1;
  arr.forEach((item, i) => {
    if (item[key] === value) {
      index = i;
    }
  });
  return index;
}
module.exports = {
  getIndex,
};

// const getIndex = (arr, key, val) => {
//   let idx = -1;
//   arr.forEach((item, i) => {
//     if (item[key] === val) {
//       idx = i;
//     }
//   });
//   return idx;
// };
