function calc(firstNum, secondNum, operator) {
  if (operator === "+") {
    return firstNum + secondNum;
  }
  if (operator === "-") {
    return firstNum - secondNum;
  }
  if (operator === "*") {
    return firstNum * secondNum;
  }
  if (operator === "/") {
    return firstNum / secondNum;
  } else {
    return "wrong data provided";
  }
}
module.exports = {
  calc,
};

// Define a function called 'calc' which takes 3 arguments.
// Set up a condition for each of the possible 4 signs (+, -, *, /);
// Before running any of these check that all arguments are there, if any is missing return 'wrong data provided'
// Otherwise do the proper operation based on the sign.
// Return the result.

//======================  EXAMPLE  ========================
calc(5, 15, "+");
20; // <======  EXPECTED OUTPUT
