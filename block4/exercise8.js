function uniqueElements(arr) {
  let newArr = [];
  let uniqueArr = new Map();
  arr.forEach((name) => {
    if (!uniqueArr[name]) {
      uniqueArr[name] = true;
      newArr.push(name);
    }
  });
  return `old array ${arr.join(",")}, new array ${newArr.join(",")}`;
}

module.exports = {
  uniqueElements,
};

// const uniqueAnimals = Object.keys(uniqueAnimalsHashtable);
// Inside it create a new Array called 'newArr'
// Loop inside the array (argument) and for each iteration check if the element is present in the 'newArr' and push it if is not there.
// Make up the sentence as required using the 'newArr' array.
// Return the sentence.

// create a function called uniqueElements which takes an array as argument.
// you need one array with the unique elements so loop through and get rid of duplicates.
// (also these who were double before removing the duplicates)
// you should return an array only with the unique elements, without duplicates
// the original array should be left untouched..
