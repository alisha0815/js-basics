function take_and_push(arr, first_index, second_index) {
  first_element = arr[first_index];
  second_element = arr[second_index];
  return [first_element, second_element];
}

module.exports = {
  take_and_push,
};
