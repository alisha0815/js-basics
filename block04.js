"=== EXERCISE 0 ==="

// create a function called isTrue
// it should check if the data passed into it is NOT:

// undefined
// an empty string
// false
// null
// 0

// your function should take one argument and return true if it is not one of the falsy 
// above and false if it is

//======================  EXAMPLE  ========================
isTrue("I exist!")
true // <======  EXPECTED OUTPUT
isTrue("")
false // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 1 ==="

// write a function called check_who_is_older, it takes 4 arguments (name, age, name2, age2)
// it checks who is older and returns a sentence saying 
// "{{name}} age {{age}} is older than {{name2}} age {{age2}}"
// if they are of the same age it should return "they are of the same age".

//======================  EXAMPLE  ========================
check_who_is_older('stefano', 27, 'antonello', 35)
"antonello age 35 is older than stefano age 27" // <======  EXPECTED OUTPUT
check_who_is_older('John', 57, 'Peter', 95)
"Peter age 95 is older than John age 57" // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 2 ==="

// write a function  called is_an_even_number that takes an array as argument, 
// it loops through it and checks if the elements are numbers (or a string that can be converted to a number) 
// and if they are even.
// you should also keep track of the even numbers by increasing the value of a variable called count, which you should 
// return at the end of the function.
// for this exercise we treat number 0  as an even number, but only if it is provided as a zero

//======================  EXAMPLE  ========================
is_an_even_number([1,5,9,33,65,[],'',122,66,['banana']])
2 // <======  EXPECTED OUTPUT
is_an_even_number(["100", 33, "Hello"])
1 // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 3 ==="

// write a function called check_types it takes an array as argument, it loops through it and checks the typeof each element
// it needs to find out how many different data types there are.
// it should at the end return the number of data types.

//======================  EXAMPLE  ========================
check_types([1,5,9,33,65,122,66,['banana']])
2 // <======  EXPECTED OUTPUT
check_types([{},"hello", 55,22,333, "66"])
3 // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 4 ==="

// Create a function called checker that loops through a string and checks how 
// many occurrences of commas and question marks there are in it.
// it then returns a string with the numbers of commas and question marks
// please make sure to use the appropriate form, so if for instance there are 
// more than one commas / question marks you should use plural 
// like commas / question marks, otherwise singular: comma / question mark.

//======================  EXAMPLE  ========================
checker('Hello, how are you today? I am not bad and you?')
'1 comma, 2 question marks' // <======  EXPECTED OUTPUT
checker('Do you like bananas?')
'0 comma, 1 question mark' // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 5 ==="

// write a function called howManyCaps which counts the capitals in the word, 
// it then returns a sentence saying how which letters are capital and how many 
// capitals there are in total.

//======================  EXAMPLE  ========================
howManyCaps('Antonello Sanna Likes videoGames')
'There are 4 capitals and these are A,S,L,G' // <======  EXPECTED OUTPUT
//=========================================================

        
"=== EXERCISE 6 ==="

// write a function called numberConverter which takes an array as an argument 
// then it loops through the array and checks if each element can be converted to a number 
// pay attention that empty arrays and empty strings are implicitly converted to 0, so you should 
// exclude them from conversion, they should be treated as unconvertible.
// any numbers inside strings or if they are a single item of the array should be converted

// if they can be converted it converts them and keeps track of how many can't be converted 
// and it returns a string which outputs the result, as shown below.
// "[...numbers] were converted while NUMBER_OF_UNCONVERTABLE couldn't be converted"
// if the argument passed is already a number then it should be ignored, 
// if all arguments are numbers then the function should return instead the following message:
// no need for conversion

//======================  EXAMPLE  ========================
numberConverter(["12", "55","hello"])
"2 were converted to numbers: 12,55, 1 couldn't be converted" // <======  EXPECTED OUTPUT
numberConverter([22,55,66])
"no need for conversion" // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 7 ==="

// write a function called booleanChecker, it takes two arguments, one array 
// and one maxCapacity which is a number
// create an empty array called bool inside your function
// loop through the provided array and every time you find a boolean push it 
// to our bool array until you reach the maxCapacity:
// if the maxCapacity argument is missing it should default to unlimited;

//======================  EXAMPLE  ========================
booleanChecker(["12", "55","hello"],3)
"0 booleans were found " // <======  EXPECTED OUTPUT
booleanChecker(["12", "55",true, false, true, true, true],3)
"3 booleans were found true,false,true" // <======  EXPECTED OUTPUT
booleanChecker(["12", "55", true, false, true, true, true],1)
"1 booleans were found true" // <======  EXPECTED OUTPUT
//=========================================================

//  once done you should return a string as below:
// `${how many booleans goes here} booleans were found ${your booleans go here}`


"=== EXERCISE 8 ==="

// create a function called uniqueElements which takes an array as argument.
// you need one array with the unique elements so loop through and get rid of duplicates.
// (also these who were double before removing the duplicates)
// you should return an array only with the unique elements, without duplicates
// the original array should be left untouched..

//======================  EXAMPLE  ========================
uniqueElements(['mike','jason','peter','robert','mike','jason','jenny','jane'])
"old array mike,jason,peter,robert,mike,jason,jenny,jane, new array mike,jason,peter,robert,jenny,jane" // <======  EXPECTED OUTPUT
uniqueElements(["a","b","b",44,55,4,4])
"old array a,b,b,44,55,4,4, new array a,b,44,55,4" // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 9 ==="

// extend the previous exercise by making sure to return only the unique elements 
// of the array only this time the function takes a second argument, max.
// all items of the newarray  must be numbers and bigger or equal than max. (no conversion to numbers)

//======================  EXAMPLE  ========================
uniqueElements(['mike','jason','peter','robert','mike','jason','jenny','jane'])
"old array mike,jason,peter,robert,mike,jason,jenny,jane, new array " // <======  EXPECTED OUTPUT
uniqueElements([3,5,5,5,56], 10)
"old array 3,5,5,5,56, new array 56" // <======  EXPECTED OUTPUT
uniqueElements(["a","b","b","44",55,4,4],25)
"old array a,b,b,44,55,4,4, new array 55" // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 10: Guess My Number game' ==="
{/*

You are going to try to build a Guess My Number game with JavaScript

----------

The essence of this game is that computer randomly guesses some number and a player 
// has to guess it with limited number of guesses. 

----------
Requirements:
- game should generate a random number in a given range (1-100, for example)
- player should be told the range of possible numbers and how many guesses they have
- game should display a prompt with input field for a number
- after each guess game should tell:
- number is too big (if the number from user is greater than the guessed number)
- number is too small (if the number is smaller than the guessed number)
- If player could guess the number than the game should give a message about that and 
  render text/image confirming the win
- if player couldn’t guess the number with given amount of guesses then the game stops 
  and tells the number which was guessed
----------
Help
- Use built-in JavaScript method to create a random number
- Remember to define number of guesses first
- Use loop to repeat prompts asking user for a number
- Use conditionals to check if the numbers match
- the range, 0 - 10, if you put 100 it will be 1 - 100
----------

*/}
