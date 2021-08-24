function runOnRange(obj) {
  let arr = [];
  var startNum = obj.start;
  var endNum = obj.end;
  var stepNum = obj.step;
  if (obj.step == undefiend) {
    return arr;
  }
  if (startNum > endNum && stepNum < 1) {
    for (var i = startNum; i >= endNum; i += stepNum) {
      arr.push(i);
    }
  } else {
    for (var i = startNum; i <= endNum; i += stepNum) {
      arr.push(i);
    }
  }

  return arr;
}
module.exports = {
  runOnRange,
};
