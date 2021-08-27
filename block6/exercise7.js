function runOnRange(obj) {
  let arr = [];
  var start = obj.start;
  var end = obj.end;
  var step = obj.step;
  if (start > end) {
    // unOnRange({ start: 12, end: 10, step: 1 });
    // []  <======  EXPECTED OUTPUT
    if (step >= 0) {
      return arr;
      // runOnRange({ start: 26, end: 24, step: -1 });
    } else if (step < 0) {
      for (let i = start; i <= end; i += step) {
        return arr.push(i);
      }
    }
  }
  // runOnRange({ start: 20, end: 26, step: 3 });
  if (start < end) {
    for (let i = start; (i = end); i += step) {
      return arr.push(i);
    }
  }
  return arr;
}

// if (startNum > endNum && stepNum < 0) {
//   for (var i = startNum; i >= endNum; i += stepNum) {
//     arr.push(i);
//   }
//   // runOnRange({start:12, end: 10, step: 1})
// } else {
//   for (var i = startNum; i <= endNum; i += stepNum) {
//     arr.push(i);
//   }
// }
module.exports = {
  runOnRange,
};

//======================  EXAMPLE  ========================
// runOnRange({start: 20, end: 26, step: 0}) # start < end step =0
// // [] <======  EXPECTED OUTPUT
// runOnRange({start: 20, end: 26, step: 3}) # start < end  step > 0
// // => 20
// // => 23
// // => 26
// [ 20, 23, 26 ] // <======  EXPECTED OUTPUT
// runOnRange({start: 26, end: 24, step: -1}) start > end step < 0
// // => 26
// // => 25
// // => 24
// [ 26, 25, 24 ] // <======  EXPECTED OUTPUT
// runOnRange({start:12, end: 10, step: 1}) # start > end  step >0
// // []  <======  EXPECTED OUTPUT
// runOnRange({start:0, end: 10, step: 4}) # start < end step >0
// [ 0, 4, 8 ] // <======  EXPECTED OUTPUT
//=========================================================
