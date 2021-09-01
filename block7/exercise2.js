// Define a function called 'addCurrency' which takes 3 arguments: a 'coin' a 'value' and an array ('crypt')
var crypt = []; // your DB
var coin = { coin: "bitcoin", rate: 8000 };
var value = 2;
console.log(coin);

// Capitalize the name
const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

// Add Currency
const addCurrency = (coin, value, crypt) => {
  // Cehck if the 'coin' is already in the array
  // Store the index
  var index = crypt.findIndex((ele) => ele.coin === coin.coin);
  // If it is NOT, push it to the 'crypt' array.
  if (index === -1) {
    crypt.push(coin);
    // Return a string
    return `New coin ${capitalize(coin.coin)} added to Database`;
  } else {
    // If it is there, call 'findCurrency' to get the rate
    return findCurrency(coin, value, index, crypt);
  }
};

// Find Currency
const findCurrency = (coin, value, index, crypt) => {
  // get the rate of the 'coin' using the index to access the right 'coin' from the 'crypt' array.
  var index = crypt.findIndex((ele) => ele.coin === coin.coin);
  var rate = crypt[index].rate;
  converter();
  return converter(value, rate, coin);
  // call the converter function passing the 'value', the rate and the 'coin'.
};

// Converter
const converter = (value, rate, coin, index, crypt) => {
  // perform the conversion
  var result = value * rate;

  return tellConversion(result, coin, value);
};

const tellConversion = (result, coin, value, rate, index, crypt) => {
  return `You will receive ${result} usd for your 2 ${crypt[index].coin}`;
};

// Perform the conversion and return call tellConversion to output the result.

// Define a function called tellConversion which takes 3 arguments a result, a 'coin' and a 'value'.

// Create a string as shown in the example using the arguments of tellConversion.

module.exports = {
  addCurrency,
  findCurrency,
  converter,
  tellConversion,
};
