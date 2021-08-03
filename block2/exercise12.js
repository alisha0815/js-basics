function isThere(arr, color) {
  if (arr.includes(color)) {
    return false;
  } else {
    return true;
  }
}
module.exports = {
  isThere,
};
