var total = 0;
var bankAccount = {
  total: new Number(),
  withdraw: function (amount) {
    total -= amount;
    return total;
  },

  deposit: function (amount) {
    total += amount;
    return total;
  },

  balance: function () {
    return total;
  },
};

module.exports = {
  bankAccount,
};

// Total is a number and balance a method.

// Define an object called 'bankAccount'.

// define a key total with a value of 0;

// define the following 3 methods as the keys of the object 'bankAccount', their values would be functions performing the withdraw/deposit/balance operations:

// define a method called withdraw which takes an argument and subtracts it from the value of total

// define a method called deposit which takes an argument and adds it to the value of total

// define a method called balance which takes no arguments and just returns total
