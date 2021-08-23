function dinamicConverter(stirng, arr, currency) {
  let currenciesDB = {};
}

module.exports = {
  dinamicConverter,
  currenciesDB,
};

// Define an empty array called 'currenciesDB'

// Define a function called 'dinamicConverter' which takes 3 arguments: a string, an array and a currency.

// Inside it declare a variable called 'one'.

// Split the functionality in 2 main conditions.

// If the argument string is "add" then you should add to the 'currenciesDB' array.
// If the argument is 'convert' then you should fetch the rate and convert.

// ====== ADD ======

// Check first if the 'currenciesDB' is empty, if that's the case push the array to it and set result to be 1;

// If it is not empty use Array.prototype.findIndex to first check if the array is already inside 'currenciesDB'.

// If it is not push it in and and set result to be 1;

// In case it is already present, don't push it and set result to be NaN.

// ====== CONVERT ======

// Check first if currency argument 'curr' is equal to usd

// If it is find it's conversion rate using Array.prototype.findIndex
// Return the result

// If it is not usd then you need to first find the exchange rate of your currency to usd and then convert that in the desired currency.

// Return the result.
