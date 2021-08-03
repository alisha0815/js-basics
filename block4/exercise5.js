function howManyCaps(string) {
  let capArr = [];
  var arr = string.replace(/\s+/g, "").split("");
  arr.forEach((element) => {
    if (element === element.toUpperCase()) {
      capArr.push(element);
    }
  });
  var count = capArr.length;
  var message = `There are ${count} capitals and these are ${capArr.join(",")}`;
  return message;
}
module.exports = {
  howManyCaps,
};
