function model(action, obj, schema) {
  var DB = [];
  let newObj = {};
  if (action !== "add") {
    return "missing action argument or wrong provided";
  }
  var objArr = Object.keys(obj);
  schema.forEach((element) => {
    if (objArr.includes(element)) {
      newObj[element] = obj[element];
    }
  });
  DB.push(newObj);
  return DB;
}
module.exports = {
  model,
};

//   var objArr = Object.keys(obj);
//     schema.forEach((element) => {
//       if (objArr.includes(element)) {
//         newObj[element];
//         DB.push(newObj);
//         return DB;

// Inside it create an empty array called 'DB'.

// First make sure that the argument action is present and that its value is "add"

// If it's not then you should return the following error "missing action argument or wrong provided"

// If it is then declare an empty object called 'newObj'.

// Then loop through the obj (argument) using a 'for in' loop.

// For each iteration check if the key of the object is present in the schema

// If it is then add the key and value to our 'newObj'.

// Then outside the loop push our 'newObj' to the 'DB' array.

// Return the array.
