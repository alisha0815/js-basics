function invalidateDate(month, day) {
  if (month > 12 || day > 31 || month < 1 || day < 1) {
    return true;
  } else {
    return false;
  }
}

function pluralize(count, noun, suffix = "s") {
  return `${count} ${noun}${count !== 1 ? suffix : ""}`;
}

function checkAge(month, day) {
  let today = new Date();
  let todayYear = today.getFullYear();
  let birthDay = new Date(`${month}/${day}/${todayYear}`);
  let timeDiff = birthDay - today;
  console.log(timeDiff);
  let days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
  console.log(days);
  if (invalidateDate(month, day)) {
    return "Error invalid data provided";
  } else {
    if (days === 0) {
      return "happy birthday!";
    }
    if (days < 1) {
      return "Sorry your birthday is passed for this year";
    }
    if (days >= 1) {
      if (days >= 30) {
        let countMonth = Math.floor(days / 30);
        let countDays = days % 30;
        let messageMonth = pluralize(countMonth, "month");
        let messageDay = pluralize(countDays, "day");
        return `There are ${messageMonth} and ${messageDay} until your next birthday`;
      } else {
        if (countDays === 1) {
          return `There is ${countDays} days until your next birthday`;
        }
        if (countDays > 1) {
          return `There are ${countDays} days until your next birthday`;
        }
      }
    }
  }
}

module.exports = {
  checkAge,
};

// Before running the rest of the code check if any of the arguments is invalid (example a day greater than 31, a month greater than 12 ...)
// In case of invalid data return "Error, invalid data provided"

// In case the date of birth is today return "happy birthday!"
// Create a new variable called 'timeDiff', subtract today from the date of birth and set the result to be the value of 'timeDiff'.
// If 'timeDiff' is less than 1 return  "Sorry your birthday is passed for this year"
// Create a new variable called 'days'
// Convert 'timeDiff' which is in ms to days and round it with Math.floor.
// If days is less or equal than 30 then you don't need any further checking.
// Convert the days in months assuming that every month has 30 days.
// Subtract the days used to make up months from the days, so you end up with just the "extra" days.
// Create a function called 'isPlural' which takes three arguments, a number and two strings

// These two strings will be two words – one singular and one plural.
// If the number is bigger then one then return the plural string otherwise the singular.
// We can use this function later on to output the correct message depending on how many months, days we have.

// Round both months and days using Math.floor
// Now use conditional to check if there is less than one month or less than one day, in which case you know that it will be only months or days.
// Otherwise it will be both days and months.
// Construct the sentence as required and use the helper 'isPlural' function to decide if using singular or plural forms.
