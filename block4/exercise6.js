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
    arr.forEach((element) => {
      if (element == "" || element == []) {
        unconvertable.push(element);
      } else if (!isNaN(parseInt(element))) {
        numbers.push(element);
      } else {
        unconvertable.push(element);
      }
    });
  }
  var numCount = numbers.length;
  var numberList = numbers.join(",");
  var unconvertCount = unconvertable.length;
  var message = `${numCount} were converted to numbers: ${numberList}, ${unconvertCount} couldn't be converted`;
  if (numbers.length === 0) {
    return "no need for conversion";
  } else {
    return message;
  }
}

// write a function called numberConverter which takes an array as an argument
// then it loops through the array and checks if each element can be converted to a number
// pay attention that empty arrays and empty strings are implicitly converted to 0, so you should
// exclude them from conversion, they should be treated as unconvertible.
// any numbers inside strings or if they are a single item of the array should be converted

// if they can be converted it converts them and keeps track of how many can't be converted
// and it returns a string which outputs the result, as shown below.
// "[...numbers] were converted while NUMBER_OF_UNCONVERTABLE couldn't be converted"
// if the argument passed is already a number then it should be ignored,
// if all arguments are numbers then the function should return instead the following message:
// no need for conversion

module.exports = {
  numberConverter,
};
