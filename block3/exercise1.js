var i = 1;
function firstLoop() {
  for (i; i < 11; i++) {}
  return i;
}

// Declare a variable i with a value of 1.
// Create a function called firstLoop
// Create a loop that goes until i is less or equal to 10
// In the loop increase the value of i by one each time the loop runs.
// Outside the loop but inside the function return i.

module.exports = {
  firstLoop,
  i,
};
