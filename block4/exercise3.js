function check_types(arr) {
  let count = [];
  for (let i = 0; i < arr.length; i++) {
    let dataType = typeof arr[i];
    if (!count.includes(dataType)) {
      count.push(dataType);
    }
  }
  return count.length;
}

module.exports = {
  check_types,
};
