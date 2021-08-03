function shortener(string) {
  var arr = [];
  var stringArr = string.split(" ");
  var firstName = stringArr[0].charAt(0).toUpperCase() + string.slice(1);
  var lastName = stringArr[stringArr.length - 1][0].toUpperCase() + ".";
  arr.push(firstName, lastName);
  return arr.join(" ");
}

// Define a function called shortener which takes a string as an argument.
// Split the string in 2 words passing the empty space as argument.
// Create a new string which has to:
//
// Get the first word,
// The first letter of the second word made upperCase and a dot.
// Concatenate them and return them.
module.exports = {
  shortener,
};
