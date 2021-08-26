function model(action, obj, schema) {
  var DB = [];
  let newObj = {};
  if (action !== "add") {
    return "missing action argument or wrong provided";
  }
  var objArr = Object.keys(obj);
  for (var item in schema) {
    if (objArr.includes(item) && typeof obj[item] == schema[item]) {
      newObj[item] = obj[item];
    }
  }
  DB.push(newObj);
  return DB;
}
module.exports = {
  model,
};
