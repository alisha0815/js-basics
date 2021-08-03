"=== EXERCISE 1 ===";

/*
Write a function called assigner which takes 2 arguments, an array and a number which will be used as an index in the array. It then takes one element from the provided array at the given index and 
places it in a new array then returns it.
*/

//======================  EXAMPLE  ========================
var arr = ["milk", "cheese", "car", "lime"];
var index = 2;
assigner(arr, index);
["car"]; // <======  EXPECTED OUTPUT
//=========================================================

("=== EXERCISE 2 ===");

// write a function called takeAll which takes an array as argument,
// it then returns a new array which has all values of the original
// array but in reverse order.

//======================  EXAMPLE  ========================
var arr = ["milk", "cheese", "car", "lime"];
takeAll(arr);
["lime", "car", "cheese", "milk"]; // <======  EXPECTED OUTPUT
//=========================================================

("=== EXERCISE 3 ===");

/*
Create a function swap which takes 3 arguments -- two arrays and a number. It needs to swap two items in these arrays at the specified position/index which is the third argument -- number. Then this function has to return these two arrays inside another array.

In the example we are swapping orange with playstation because the providede index is 2.
*/

//======================  EXAMPLE  ========================
var arr = ["banana", "apple", "orange"];
var arr2 = ["tv", "dvd-player", "playstation"];
var pos = 2;
swap(arr, arr2, pos)[
  (["banana", "apple", "playstation"], ["tv", "dvd-player", "orange"])
]; // <======  EXPECTED OUTPUT
//=========================================================

("=== EXERCISE 4 ===");

// create a function called splicer which removes an element from an array and returns this modified array.
// this function takes two arguments:
// 1) the array
// 2) the position/index of the element in the array to be removed

//======================  EXAMPLE  ========================
var arr = ["cheese", "salame", "bread", "water", "pizza"];
splicer(arr, 2)[("cheese", "salame", "water", "pizza")]; // <======  EXPECTED OUTPUT
//=========================================================

("=== EXERCISE 5 ===");

/* 
Write a function called removeFirstAndLast. It takes an array as an argument and returns it but without first and last items which should be removed.
*/

//======================  EXAMPLE  ========================
var arr = ["car", "soap", "banana", "tv", "toothbrush"];
removeFirstAndLast(arr)[("soap", "banana", "tv")]; // <======  EXPECTED OUTPUT
//=========================================================

("=== EXERCISE 6 ===");

// write a function called removeAll
// it takes an array as an argument, removes all the elements from it and returns it as an empty array.

//======================  EXAMPLE  ========================
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 3, 4, 523, 44, 3454];
removeAll(arr);
//[]  <======  EXPECTED OUTPUT
//=========================================================

("=== EXERCISE 7 ===");

/*
Write a function called pusher which takes one argument - an array.

Using .push() method take all the elements from the array and push them to a new variable called arr2 avoiding
having nested arrays. Then return arr2.

hint==> take a look at spread operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
*/

//======================  EXAMPLE  ========================
var arr = ["one", "two", "three", "four"];
pusher(arr)[("one", "two", "three", "four")]; // <======  EXPECTED OUTPUT
//=========================================================

("=== EXERCISE 8 ===");

// create a function called take_and_push which takes 3 arguments, an array and two numbers.
// the second and third arguments are representing indexes
// you need to take the elements in the array that are at the given indexes and push them to a new array.
// then return this new array.

//======================  EXAMPLE  ========================
var arr = [
  "Breaking bad",
  "WestWorld",
  "Psych",
  "Games of Thrones",
  "Gotham",
  "Spartacus",
  "Dexter",
  "Office",
];
take_and_push(arr, 2, 4)[("Psych", "Gotham")]; // <======  EXPECTED OUTPUT
//=========================================================

("=== EXERCISE 9 ===");

// create a function called concatenator which takes two arrays as the arguments
// and then using Array.concat combine them into a single array and return.

//======================  EXAMPLE  ========================
var arr1 = ["Breaking bad", "WestWorld", "Psych", "Games of Thrones"];
var arr2 = ["Gotham", "Spartacus", "Dexter", "Office"];
concatenator(arr1, arr2)[
  ("Breaking bad",
  "WestWorld",
  "Psych",
  "Games of Thrones",
  "Gotham",
  "Spartacus",
  "Dexter",
  "Office")
]; // <======  EXPECTED OUTPUT
//=========================================================

("=== EXERCISE 10 ===");

// create a function called findPosition which takes two arguments, an array and an element and it returns
// the index of the given element.

//======================  EXAMPLE  ========================
var arr = ["glass", "car", "watch", "sofa", "macbook"];
findPosition(arr, "car");
1; // <======  EXPECTED OUTPUT
findPosition(arr, "sofa");
3; // <======  EXPECTED OUTPUT
findPosition(arr, "glass");
0; // <======  EXPECTED OUTPUT
//=========================================================

("=== EXERCISE 11 ===");

// create a function called isThere which takes an array as first argument and a string as second,
// it needs to check if the string is inside the array and returns true if it is and false if it's not.

//======================  EXAMPLE  ========================
var arr = ["green", "red", "black", "blue", "brown", "yellow", "purple"];
isThere(arr, "red");
true; // <======  EXPECTED OUTPUT
isThere(arr, "banana");
false; // <======  EXPECTED OUTPUT
//=========================================================

("=== EXERCISE 12 ===");

// now do the same exercise using the method includes only this time you should return false if the
// color is there and true if it's not!

//======================  EXAMPLE  ========================
var arr = ["green", "red", "black", "blue", "brown", "yellow", "purple"];
isThere(arr, "red");
false; // <======  EXPECTED OUTPUT
isThere(arr, "banana");
true; // <======  EXPECTED OUTPUT
//=========================================================

("=== EXERCISE 13 ===");

// write a function called characterRemover which takes two arguments, a
// string and a character to be removed and returns the string free of the
// unwanted character.
// please note: in order for the string to make sense you should replace
// the unwanted characters with a space so that your string will look like this:

//======================  EXAMPLE  ========================
var str = "I,Really,Like,Pizza";
characterRemover(str, ",");
("I Really Like Pizza"); // <======  EXPECTED OUTPUT
//=========================================================

("=== EXERCISE 14 ===");

// write a function called isArrayFunc which takes an argument and returns
// true if it's an array and false if it's anything else.

//======================  EXAMPLE  ========================
var one = { name: "antonello" };
false; // <======  EXPECTED OUTPUT
var two = ["name", "antonello"];
true; // <======  EXPECTED OUTPUT
var three = [[], [], {}, "antonello", 3, function () {}];
true; // <======  EXPECTED OUTPUT
//=========================================================
