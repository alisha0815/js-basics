function tellAge(month, day, year) {
  let today = new Date();
  let timeDiff = today - new Date(`${month}/${day}/${year}`);
  let days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
  let age = Math.floor(days / 365);
  if (timeDiff < 1) {
    return "You can't be born in the future!";
  } else {
    if (days < 365) {
      return `You are ${days} days old`;
    } else {
      return `You are ${age} years old`;
    }
  }
}

// Define a function called 'tellAge' which takes an 3 arguments: a day, a month, and a year.
// Inside the function create 2 Date objects -- one for today and another for the date of birth provided in the arguments.
// Create a new variable called 'timeDiff' and as a value assign results of subtracting the date of birth
// from today. It will be the difference in milliseconds
// If 'timeDiff' is less than 1 return "You can't be born in the future!"
// Create a new variable called 'days'
// Convert 'timeDiff' which is in ms to days and round it with Math.floor.
// You will have an age of a person in days.
// Check if number of days bigger than 365 and then compose an output string with age in years.
// If it's less than 365 then compose an output string in days.
// Return this output string
module.exports = {
  tellAge,
};
