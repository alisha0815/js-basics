function dinamicConverter(stirng, arr, currency) {
  let currenciesDB = {};
}

module.exports = {
  dinamicConverter,
  currenciesDB,
};

// dinamicConverter('add', ['euro',1.2])
// 1 // <======  EXPECTED OUTPUT
// dinamicConverter('add', ['euro',1.2])
// 'invalid data provided!' // <======  EXPECTED OUTPUT (because the item is already present)
// dinamicConverter('add', ['gbp',1.5])
// 1 // <======  EXPECTED OUTPUT
// dinamicConverter('add', ['gbp',1.5])
// "invalid data provided!" // <======  EXPECTED OUTPUT
// dinamicConverter('convert', ['euro',100], 'gbp')
// 80 // <======  EXPECTED OUTPUT
// dinamicConverter('convert', ['euro',100], 'hmmm'),
// "invalid data provided!" // <======  EXPECTED OUTPUT
// //=========================================================
