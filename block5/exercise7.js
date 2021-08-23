function stringChop(string, len) {
  let arr = [];

  if (len == null) {
    return [];
  }
  for (let i = 0; i < string.length; i += len) {
    let splitedStr = string.substring(i);
    let letter = splitedStr.substring(0, len);
    arr.push(letter);
  }

  return arr;
}

module.exports = {
  stringChop,
};

// Define a function called 'stringChop' which takes 2 arguments: a string and a 'len'.
// If the second argument is missing return an array with just the string passed as argument.
// Define an empty array called 'arr' and a variable called 'i' and give it a value of 0;
// Create a 'for' loop and loop as long as 'i' is less than string.'len'gth, increasing 'i' by 'len' each time.
// Inside the loop call String.prototype.substring and call it passing 'i' and i + 'len', and push its return to 'arr'.
// The outside the loop return 'arr'.
