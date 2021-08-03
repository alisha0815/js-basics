"=== EXERCISE 1 === "

// create a function called firstLoop
// outside the function declare a variable called i and give it a value of 1
// inside the function create a for loop that prints out the numbers from 1 to 10.
// then return i

//======================  EXAMPLE  ========================
firstLoop()
11 // <======  EXPECTED OUTPUT
//=========================================================

   
"=== EXERCISE 2 ==="

// create a function called firstLoopReverse
// outside the function declare a variable called i and give it a value of 11
// inside the function create a for loop that prints out the numbers from 11 to 1.
// then return i

//======================  EXAMPLE  ========================
firstLoopReverse()
0 // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 3 ==="

// write a function called isEven which takes an array as argument and checks 
// if each element is even or odd.
// inside the function declare a variable called count which keeps track of 
// how many even numbers there are.
// once done return count
// see example below for how to use a basic if statement here.

function isEven(arr){
    //declare your count
    // loop and inside it...
      if ("_your_condition_here"){
            count++
    }
    return count
}

//======================  EXAMPLE  ========================
isEven([2,4,8,7])
3 // <======  EXPECTED OUTPUT
isEven([1,9,66,"banana"])
1 // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 4 ==="

// declare the following array
var arr = ['one','two','three','four']
// create a function called looper which takes the array as argument
// inside it write a forEach loop which console.log each element and each 
// index for every iteration.
// Inside the function declare a variable called count, and increment it by one 
// for each iteration then return count.

//======================  EXAMPLE  ========================
looper([2,4,8,7])
4 // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 5 ==="

// write a function called isString which takes an array as argument.
var anyArr = ['one', 5, 'two', 6, 'three', true, 'four']
// inside it write a forEach loop that loops through this example array and 
// checks if the type of each element is a string, 
// every time it finds a string it pushes it into an array.
// return that array
// you can refer to the example in EXERCISE 3 for the simple if statement if you wish.

//======================  EXAMPLE  ========================
isString([3,55,66,"hello"])
["hello"] // <======  EXPECTED OUTPUT
isString([3,55,66,"hello","beer",12,{},[],()=>{},"[]"])
["hello","beer","[]"]  // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 6 ==="

// write a function called sum which takes an array as argument and then 
// return the sum of all its elements.

//======================  EXAMPLE  ========================
sum([10,10,10])
30 // <======  EXPECTED OUTPUT
sum([5,20,10])
35 // <======  EXPECTED OUTPUT
sum([35,20,10])
65 // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 7 ==="

// write a function called multy which takes an array as argument and multiply 
// each number and then returns the result.

//======================  EXAMPLE  ========================
multy([10,10,10])
1000 // <======  EXPECTED OUTPUT
multy([5,4,2])
40 // <======  EXPECTED OUTPUT
multy([15,4,2])
120 // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 8 ==="

// write a function called timesTwo which takes an array as an argument.
// inside it use the forEach loop and push the numbers of the array to a 
// new array and multiply them by two on the way then return the new array

//======================  EXAMPLE  ========================
timesTwo([10,10,10])
[20,20,20] // <======  EXPECTED OUTPUT
timesTwo([5, 4,2])
[10,8,4] // <======  EXPECTED OUTPUT
timesTwo([15, 4,2])
[30,8,4] // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 9 ==="

// write function called twoArrays which takes two arrays as arguments, 
// these arrays are of the same length
// inside it declare a variable called count
// it then loops and compare each element of one array with that of the other, 
// in pairs with same indexes and every time it finds a match it increases the 
// number of count by one then return count

//======================  EXAMPLE  ========================
twoArrays([1,5,80], [10,5,80])
2 // <======  EXPECTED OUTPUT
twoArrays([10,10,10], [10,10,5])
2 // <======  EXPECTED OUTPUT
twoArrays([3,5], [1,4,5])
0 // <======  EXPECTED OUTPUT
twoArrays([3,5], ['3','5'])
0 // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 10 ==="

// now do the same exercise only this time ignore the type.

//======================  EXAMPLE  ========================
twoArrays([1,5,80], [10,5,80])
2 // <======  EXPECTED OUTPUT
twoArrays([1,5,'80'], [10,5,80])
2 // <======  EXPECTED OUTPUT
twoArrays([3,5], [1,4,5])
0 // <======  EXPECTED OUTPUT
twoArrays([3,5], ['3','5'])
2 // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 11 ==="

// write a function called lowerCaseLetters which takes a string as argument.
// the string will contain some upper case letters and some numbers, 
// then create a new variable which needs to contain this string without numbers all in lowercase and 
// with spaces between words
// once done return the resulted string 

// original sentence = An2323t2323one32llo123455Likes567323Play323ing567243G2323a3mes345

//======================  EXAMPLE  ========================
lowerCaseLetters("An2323t2323one32llo123455Likes567323Play323ing567243G2323a3mes345")
"antonello likes playing games" // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 12 ==="

// write a function called reverser which takes one string as an argument and returns the same 
// string in reverse.
// you must use
// a loop
// push
// join

// original sentence = 'reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I'

//======================  EXAMPLE  ========================
reverser("reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I")
"I love deep fried potatoes with mayo and with a nice pint of cold beer" // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 13 ==="

// create a function called shortener which takes a string as argument.
// this string will be a full name like "Antonello sanna"
// you need to convert the name into an abbreviated form (initials), meaning that you take the 
// first letter of the surname, 
// also make sure it is capitalized, and add a dot at the end.
// Examples

//======================  EXAMPLE  ========================
shortener("Ada lovelace")
"Ada L."// <======  EXPECTED OUTPUT
shortener("Antonello sanna")
"Antonello S." // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 14 ==="

// write a function called budgetTracker which helps you keep track of your expenses while on vacation...
// you went on vacation to Japan and now you came back and you need to check your finance a bit and in order 
// to do that you need to find out:
// the average expense per day in dollars, 
// each element of the array will be the daily expense in Japanese yens
// the conversion rate for yen to dollars is 0.0089
// return the daily average

var expenses = [
        //monday
        '10003', 
        //tuesday
        '46733', 
        //wednesday
        '45833', 
        //thursday
        '3534', 
        //friday
        '57354',
        //satuy
        '45334',
        //sunday
        '34856'     
]

//======================  EXAMPLE  ========================
budgetTracker(expenses)
310 // <======  EXPECTED OUTPUT
//=========================================================


"=== EXERCISE 15 ==="

// write a function called longestString which takes an array and minLength as the arguments 
// and returns the last element from the array with length bigger than minLength:

//======================  EXAMPLE  ========================

let fruits = ['banana','kiwi','orange','apple','watermelon','pear']
longestString(fruits, 5)
'watermelon' // <======  EXPECTED OUTPUT

//=========================================================
