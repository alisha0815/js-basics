function calc(a, b, opt) {
  let newOpt = typeof opt !== "undefined" ? opt : b;
  if (newOpt === "+" || newOpt === "-") {
    b = typeof opt !== "undefined" ? b : 0;
    if (newOpt === "+") {
      var sum = a + b;
      return sum;
    }
    if (newOpt === "-") {
      var minus = a - b;
      return minus;
    }
  }
  if (newOpt === "/" || newOpt === "*") {
    b = typeof opt !== "undefined" ? b : 1;
    if (newOpt === "*") {
      var multi = a * b;
      return multi;
    }
    if (newOpt === "/") {
      var divide = a / b;
      return divide;
    }
  }
}
module.exports = {
  calc,
};

// == STEPS ===
// Define a function called 'calc' which takes an 3 arguments a, b, opt.
// If the third argument is missing and the second is '+' or '-' then set 'opt' to be equal to 'b' and 'b' to be equal to 0;
// If the third argument is missing and the second is '*' or '/' set 'opt' to be 'b' and 'b' to be 1.
// Then perform the calculation as in the previous exercise. (You could even call the same function from it)

// extend our awesome calc function by adding some conditions...
// in case the third arguments is  / or * and the second argument is not provided,
// the second argument should default to one.
// in case the third arguments is +  or  - and the second argument is not provided,
// the second argument should default to zero.
