function isTrue(data) {
  if (
    !data == NaN ||
    data == "" ||
    data == false ||
    data == null ||
    data === 0
  ) {
    return false;
  } else {
    return true;
  }
}
module.exports = {
  isTrue,
};
