function lowerCaseLetters(string) {
  var newArr = [];
  var arr = string.split("");
  arr.forEach((letter) => {
    if (Number.isNaN(letter)) {
      newArr;
    } else {
      newArr.push(letter);
    }
    return newArr;
  });
  let sentence = newArr.join("");
  return sentence;
}

// Define a function called lowerCaseLetters which takes a string as argument.
// Inside it define an empty array.
// Loop through the string using the loop of your choice.
// First check if the element is not and cannot be converted to a number using isNaN.
// Then check, if the character is uppercase then push it with a space before it, if is lowercase push it without it.
// Then outside the loop trim (String.prototype.trim) the string to get rid of unwanted spaces.

// original sentence = An2323t2323one32llo123455Likes567323Play323ing567243G2323a3mes345

module.exports = {
  lowerCaseLetters,
};
