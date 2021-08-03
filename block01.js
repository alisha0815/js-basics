/* 
Please write your solution in the corresponding folder/file to make them available for the testing

IN ORDER TO TEST YOUR SOLUTIONS YOU SHOULD RUN THE FOLLOWING COMMANDS IN THE TERMINAL:

First time just once from the folder with the exercises you cloned, ie BCS_JS_BOOTCAMP_FILES_TDD:

npm install

This will install needed npm packages for testing

To test an exercise also from the folder with the exercises:

npm run test-single -- test/'NAME_OF_THE_TEST_FILE_YOU_ARE_TESTING'

example :
if you are doing exercise 1 of block 1 it should be 

npm run test-single -- test/b1exercise1.test.js

Then simply change the block/exercises numbers, like for Block 02 Exercise 3 run this:

npm run test-single -- test/b2exercise3.test.js
*/


'=== EXERCISE 1 ==='

/* 

Outisde of a function create a variable called apple and assign to it a value of 5 and another variable called apple2 and give to it a value of 15.

NB: for this block we ask you to define some variables outside of the functions for the sake of testing that you know how to do it. Normally, all the data is coming into the functions via arguments so please do not confuse those variables with the arguments inside your functions.

Modify your sum function so that it will return the sum of two arguments num and num2

*/

//======================  EXAMPLE  ========================
total(15,5)
20 // <======  EXPECTED OUTPUT
total(20,20)
40 // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 2 ==='

// Outside the function create 2 variables -- a , b -- and assign 10 to a and 24 to b

// Modify your function so that it will return the total of the multiplication of it's arguments a and b

//======================  EXAMPLE  ========================
multy(10,5)
50 // <======  EXPECTED OUTPUT
multy(20,20)
400 // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 3 ==='

/*
Age calculator

Want to find out how old you'll be? Calculate it!

Outside your function store your birth year in a variable and date_of_birth and a future year in a variable future_year.

Finish the function so that it will return the correct age.
*/

//======================  EXAMPLE  ========================
ageCalc(1982,2018)
36 // <======  EXPECTED OUTPUT
ageCalc(2000,2018)
18 // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 4 ==='

/* 
Ever wondered how much a "lifetime supply of Tea you will need?"
Let's find out!!!
Store your current age in a variable
Store your estimated end age in a variable
Store how many teas you drink per day on average
Calculate how many you will need until the end!
Output the result!
*/

//======================  EXAMPLE  ========================
howManyTeas(35,70, 2)
25550 // <======  EXPECTED OUTPUT
howManyTeas(35,36, 2)
730 // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 5 ==='

/* 
Define a function called compare which takes 2 arguments, and returns true if the first is bigger than the second and false if is not.
*/

//======================  EXAMPLE  ========================
compare(100, 50)
true // <======  EXPECTED OUTPUT
compare(1, 100)
false // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 6 ==='

/*
Define a function called compare which takes 2 arguments, and returns true if the first is equal to the second and false if is not (strict equality).
*/


//======================  EXAMPLE  ========================
compare(10, 34)
false // <======  EXPECTED OUTPUT
compare(100, 100)
true // <======  EXPECTED OUTPUT
compare(100, '100')
false // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 7 ==='

/* 
Create a function called isEven which takes 1 argument and returns true if the argument passed is even and false if is odd.
*/

//======================  EXAMPLE  ========================
isEven(7)
false // <======  EXPECTED OUTPUT
isEven(2)
true // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 8 ==='

/*
Make a function which takes age of a user and minimum age for driving a scooter and returns true if user is old enough to drive a scooter and false if not

Define variables age and minAge outside your function
*/

//======================  EXAMPLE  ========================
checkAge(21, 15)
true // <======  EXPECTED OUTPUT
checkAge(12,15)
false // <======  EXPECTED OUTPUT
checkAge(100, 60)
true // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 9 ==='

/*
Define the name of the user
Define the year of birth of the user
Make a function which returns their name and current age in a sentence like in the example:
*/

//======================  EXAMPLE  ========================
getAge(1982, 2018, 'Antonello')
`Hello Antonello you are 36 years old` // <======  EXPECTED OUTPUT
getAge(1960, 1970, 'Mike')
`Hello Mike you are 10 years old` // <======  EXPECTED OUTPUT
getAge(1200, 2000, 'Ottaviano')
`Hello Ottaviano you are 800 years old` // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 10 ==='

/*
Define the user year of birth in a variable dob
Assign the current year to a variable now
Make a function which takes 2 arguments, yeard of birth and current year and returns the following message, replacing the word *'DAYS'* with the actual value
*/

//======================  EXAMPLE  ========================
howManyDays(2016, 2018)
`you have lived for 730 days already!` // <======  EXPECTED OUTPUT
howManyDays(1982, 2018)
`you have lived for 13140 days already!` // <======  EXPECTED OUTPUT
//=========================================================


'=== EXERCISE 11 ==='

/*
It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

Store a celsius temperature into a variable.
Make a function toFahr to convert it to fahrenheit and output the result.
Now store a fahrenheit temperature into a variable.
Make a function toCelsius to convert it to celsius and output the result.
*/

//======================  EXAMPLE  ========================
toCelsius(102)
39 // <======  EXPECTED OUTPUT
toFahr(39)
102 // <======  EXPECTED OUTPUT
toCelsius(68)
20 // <======  EXPECTED OUTPUT
toFahr(57)
135 // <======  EXPECTED OUTPUT
//=========================================================
