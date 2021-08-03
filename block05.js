"========================================================================"
"=============================  EXERCISE 1  ============================="
"========================================================================"

// write a function called calc that takes 3 arguments the first 2 are numbers 
// and the third is an arithmetic operator, so it is either + , -, *, /
// and it executes the appropriate operation according to the provided arithmetic operator.
// make sure you test your function with all 4 arithmetic operations
// should the operator be missing, the function should 
// return 'wrong data provided'

//======================  EXAMPLE  ========================
calc(5,15,'+')
20 // <======  EXPECTED OUTPUT
calc(50,15,'-')
35 // <======  EXPECTED OUTPUT
calc(50,2,'*')
100 // <======  EXPECTED OUTPUT
calc(500,2,'/')
250 // <======  EXPECTED OUTPUT
calc(500,2)
'wrong data provided' // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 2  ============================="
"========================================================================"

// extend our awesome calc function by adding some conditions...
// in case the third arguments is  / or * and the second argument is not provided, 
// the second argument should default to one.
// in case the third arguments is +  or  - and the second argument is not provided, 
// the second argument should default to zero.

//======================  EXAMPLE  ========================
calc(5,15,'+')
20 // <======  EXPECTED OUTPUT
calc(500,'+')
500 // <======  EXPECTED OUTPUT
calc(10,'/')
10 // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 3  ============================="
"========================================================================"

// write a function called filter that takes 3 arguments, an array, a data 
// type and a minLength.
// it will loop through the array and return a new array where the elements 
// are NOT of the type of passed data type 
// and they have a length equal to or bigger than minLength

//======================  EXAMPLE  ========================
filter(['sdads','sadsasadasddsaddsadadsasd',44, [1,5,5,5,5,5,5,5,5,5,5,5]], 'object', 3)
["sdads", "sadsasadasddsaddsadadsasd"] // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 4  ============================="
"========================================================================"

// write a function called tellAge that tells you how old you are based on the date of birth passed.
// this function will take 3 arguments month, day and year
// You should use the Date object to set the value of today.
// if the birth date is less than one year from the current date it should return : "You are NUMBER_DAYS old"
// if its more than one year it should return you are NUMBER_YEARS old"
// Info on Date object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


//======================  EXAMPLE  ========================
// assuming today is April 11, 2018
tellAge(8,2,1982)
'You are 35 years old' // <======  EXPECTED OUTPUT
tellAge(4,3,1982)
'You are 36 years old' // <======  EXPECTED OUTPUT
tellAge(4,9,2018)
'You are 2 days old' // <======  EXPECTED OUTPUT
tellAge(4,12,2018)
"You can't be born in the future!" // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 5  ============================="
"========================================================================"

// Write a function called  checkAge that checks how many days there are between now and the next birthday. 
// this function will take 2 arguments month and day
    // if the date of birth is today it should return 
        // Happy birthday! 
    // if the date of birth is passed it should return
        // Sorry your birthday is passed for this year
    // if the day provided is out of range (31) or the month is out of the 12 it should return:
        // "Error invalid data provided"
// otherwise it should return how many months and days there are between now and the next birthday.
// in case there is less than 1 month between now and the next birthday it should ignore the month.
// for the sake of simplicity let's assume that all months have 30 days.
// Examples:
// Please bare in mind that these examples are not up to date (literally)...
// The output should be "There is / there are ## month / months and ## day / days until your birthday"

//======================  EXAMPLE  ========================
checkAge(2,8)
'There are 6 days until your next birthday' // <======  EXPECTED OUTPUT
checkAge(2,9)
'There is 1 month and 6 days until your next birthday' // <======  EXPECTED OUTPUT
checkAge(2,25)
'Sorry your birthday is passed for this year' // <======  EXPECTED OUTPUT
//=========================================================



"========================================================================"


// And here are some extra ideas to practice with Date objects, there are no tests but feel free to send your solutions to us for a check:

// 1. Finding out the day of week you were born on

// 2. Finding out the number of days left before Christmas (or some specific date)

// 3. Finding out the Zodiac sign for specific date of birth

// 4. Simple booking system with 2 features -- add a booking and check availability

"========================================================================"


"========================================================================"
"=============================  EXERCISE 6  ============================="
"========================================================================"

// Let's make a currency converter!
// it should be a flexible function which reacts differently to different inputs.
// Outside the function declare an array called currenciesDB which will hold your currencies.
// write a function called dinamicConverter which takes three arguments.
    //if the first argument is "add" then the second is:
        // an array which contains a currency and an exchange rate (to the dollar)
        // if the item is successfully added it should return the number of added items.

    //if the first argument is "convert" then the second is:
        // an array which contains the currency and the amount that you wish to convert.
        // the third argument will be the currency that you want to convert your money to.
        // if the currency is not present or any of the arguments is missing it should return 
        // an error message:  "invalid data provided!"

// Please make sure that currency is added only once not to overload your DB!
// Should the currency already present you should return "invalid data provided!"
// It should return the result of the conversion.

//======================  EXAMPLE  ========================
dinamicConverter('add', ['euro',1.2])
1 // <======  EXPECTED OUTPUT
dinamicConverter('add', ['euro',1.2])
'invalid data provided!' // <======  EXPECTED OUTPUT (because the item is already present)
dinamicConverter('add', ['gbp',1.5])
1 // <======  EXPECTED OUTPUT
dinamicConverter('add', ['gbp',1.5])
"invalid data provided!" // <======  EXPECTED OUTPUT
dinamicConverter('convert', ['euro',100], 'gbp')
80 // <======  EXPECTED OUTPUT
dinamicConverter('convert', ['euro',100], 'hmmm'),
"invalid data provided!" // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 7  ============================="
"========================================================================"

// Write a function called stringChop that chops a string into chunks of a given length and returns an array with these chunks. 

// The function takes 2 arguments -- the first one being the string to chop, and the second one a number that will be the size of you chunks. If the second argument is not provided or it is 0 then your function should return the full original string inside an array.


//======================  EXAMPLE  ========================
stringChop('BarcelonaCodeSchool')
['BarcelonaCodeSchool'] // <======  EXPECTED OUTPUT
stringChop('BarcelonaCodeSchool',0)
['BarcelonaCodeSchool'] // <======  EXPECTED OUTPUT
stringChop('BarcelonaCodeSchool',2)
["Ba", "rc", "el", "on", "aC", "od", "eS", "ch", "oo", "l"] // <======  EXPECTED OUTPUT
stringChop('BarcelonaCodeSchool',3)
["Bar", "cel", "ona", "Cod", "eSc", "hoo", "l"] // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 8  ============================="
"========================================================================"

// Write a function called strCut that takes 3 arguments, the string and 2 indexes, 
// it will then return a string after removing 
// the letters of the 2 given indexes.

//======================  EXAMPLE  ========================
strCut('BarcelonaCodeSchool',0, 1)
"rcelonaCodeSchool" // <======  EXPECTED OUTPUT
strCut('BarcelonaCodeSchool',0, 5)
"arceonaCodeSchool" // <======  EXPECTED OUTPUT
strCut('BarcelonaCodeSchool',5, 7)
"BarceoaCodeSchool" // <======  EXPECTED OUTPUT
strCut('Gennaro')
"Gennaro" // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"===========================  EXTRA CHALLENGE  =========================="
"========================================================================"

// Rock-paper-scissors

// Requirements:
// - The computer should choose randomly every turn
// - The player can click on a picture representing the option and choose it.
// - You should see if you won or lost at every turn
// - in order to win the match the player or the computer needs to win twice.
// - there need to be a score keeper to  show the current score of the player and the computer.
// - In case both select the same option then is a draw and no points should be given out.


// =============   Your solution goes to Rock_paper_scissors folder   ==============
// =============   if you are going to add UI   ====================================
