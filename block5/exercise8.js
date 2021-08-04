function isNum(element) {
  if (!isNaN(element)) {
    return "no need for conversion";
  }
}

function numberConverter(arr) {
  let numbers = [];
  let unconvertable = [];
  if (arr.every(isNum)) {
  } else {
  }
}

if (arr.every((element) => !isNaN(element))) {
  return "no need for conversion";
} else {
  arr.forEach((item) => {
    if (!isNaN(parseInt(item))) {
      var strNum = parseInt(item);
      numbers.push(strNum);
    } else {
      unconvertable.push(item);
    }
    return `${numbers.length} were converted to numbers: ${numbers.join(
      ","
    )}, ${unconvertable.length} couldn't be converted`;
  });
}
// == HINT ===
//
// You should use isNaN and typeof.
//
//
// == STEPS ===
//
// Define a function called 'numberConverter' which takes an array as argument.
// Inside it define two arrays, 'numbers' and 'unconvertable'.
// Loop through the array (argument) and for each element first check if it is not already a number
// Then check if it is not NaN, in which case push it to the 'numbers' array, otherwise push it to the 'unconvertable' array.
// Make up the sentence as required using the arrays.
// Return the sentence.
//

// numberConverter(["12", "55", "hello"]);
// ("2 were converted to numbers: 12,55, 1 couldn't be converted"); // <======  EXPECTED OUTPUT
// numberConverter([22, 55, 66]);
// ("no need for conversion"); // <======  EXPECTED OUTPUT
//====================
module.exports = {
  strCut,
};
