function model(action, obj, schema) {
  var DB = [];
  let newObj = {};
  if (action !== "add") {
    return "missing action argument or wrong provided";
  }
  var objArr = Object.keys(obj);
  for (var item in schema) {
    if (objArr.includes(item)) {
      if (typeof obj[item] == schema.item.type) {
        newObj[item] = obj[item];
      } else {
        if (objArr.includes(item) && item.default !== undefined) {
          neweObj[item] = item.default;
        }
      }
    }
  }
  DB.push(newObj);
  return DB;
}
module.exports = {
  model,
};

// Then loop through the schema and for each iteration check if the value is not present in the 'newObj' and that is present in the default.
// In this case add the default to the 'newObj'.
// Then outside the loop push our 'newObj' to the 'DB' array.
// Return the array.
