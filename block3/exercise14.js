function budgetTracker(expenses) {
  let currency = 0.0089;
  var dollarArr = expenses.map((x) => x * currency);
  var sum = dollarArr.reduce((a, b) => a + b, 0);
  var average = sum / expenses.length;
  return Math.round(average);
}

module.exports = {
  budgetTracker,
};
