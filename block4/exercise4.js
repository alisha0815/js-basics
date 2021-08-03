function checker(string) {
  var commaArr = string.split(",");
  var questionArr = string.split("?");
  let commaCount = commaArr.length - 1;
  let questionCount = questionArr.length - 1;
  if (commaCount > 1) {
    if (questionCount > 1) {
      var sentence = `${commaCount} commas, ${questionCount} question marks`;
      return sentence;
    } else {
      var sentence_two = `${commaCount} commas, ${questionCount} question mark`;
      return sentence_two;
    }
  } else {
    if (questionCount > 1) {
      var sentence_three = `${commaCount} comma, ${questionCount} question marks`;
      return sentence_three;
    } else {
      var sentence_four = `${commaCount} comma, ${questionCount} question mark`;
      return sentence_four;
    }
  }
}

module.exports = {
  checker,
};
