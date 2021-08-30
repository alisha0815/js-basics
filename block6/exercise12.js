var schema = {
  name: { type: "string", default: "NoBody" },
  age: { type: "number" },
  married: { type: "boolean", default: false },
};
var obj = {
  id: 1,
  name: "pedro",
  age: "32",
  address: "Muntaner 262, Barcelona, Spain",
};

console.log(schema.name.type);
console.log(typeof obj.name);

function model(action, obj, schema) {
  let DB = [];
  let newObj = {};
  if (action !== "add") {
    return "missing action argument or wrong provided";
  }

  for (var key in schema) {
    if (typeof obj[key] == schema[key].type) {
      newObj[key] = obj[key];
    } else if (schema[key].default !== undefined) {
      newObj[key] = schema[key].default;
    }
  }
  DB.push(newObj);
  return DB;
}
module.exports = {
  model,
};

// If it's not then you should return the following error "missing action argument or wrong provided"

// If it is then declare an empty object called 'newObj'.

// Then loop through the obj (argument) using a 'for in' loop.

// For each iteration check if the key of the object is present in the schema and if the value of the object is of the same typeof of the value in the schema.

// If it is then add the key and value to our 'newObj'.

// Then loop through the schema and for each iteration check if the value is not present in the 'newObj' and that is present in the default.

// In this case add the default to the 'newObj'.

// Then outside the loop push our 'newObj' to the 'DB' array.

// Return the array.
// Then loop through the schema and for each iteration check if the value is not present in the 'newObj' and that is present in the default.
// In this case add the default to the 'newObj'.
// Then outside the loop push our 'newObj' to the 'DB' array.
// Return the array.

// var schema = {
//     name: {type: "string", default: "NoBody"},
//     age: {type: "number"},
//     married: {type: "boolean", default: false}
// }
// var DB = []
// //======================  EXAMPLE  ========================
// model("add", {id: 1, name: "pedro", age: "32", address: "Muntaner 262, Barcelona, Spain"}, schema)
// DB // [{name: "Pedro", married: false}] => married set to default even if missing
// model("add", {name: 43, married: "asdfasdf"}, schema)
// DB /* [
//         {name: "NoBody", married: false}] => married and name set to default even wrong type */
// model("add", {name: "43", married: true, age: 20}, schema)
// DB /* [
// {name: "43", married: true, age: 20}] => married and name set to default even wrong type */
//=========================================================
