"========================================================================"
"====================== EXERCISE 1 - matchThemUp ========================"
"========================================================================" 
//⚠️ ⚠️ ==============  NO TEST FOR THIS EXERCISE  ================= ⚠️ ⚠️ ️ ️  

// create a function called matchThemUp, this function will take two arguments, 
// the name of a male and that of a female.
// it will ask both the below questions and if they have at least 50% of answers in 
// common it will alert "we have a match" otherwise it will alert "no match found!"

// - all questions must be answered with yes or no.
// - you should use prompt to ask questions unless you feel like building a UI.
// - you should end every question with the name of the person you are asking 
// the question to.
// example:
// "do you like going to the movies Mike?"
// questions:
// 1) do you like pets ? 
// 2) do you like beer ? 
// 3) do you like reading books ?
// 4) do you enjoy riding a bike ? 
// 5) do you like mainstream music the most ? 


"========================================================================"
"=============================  EXERCISE 2  ============================="
"========================================================================"

// Write a function called recursive that loops (using recursion) through 
// an array of objects(name : age).
// it should take each pair and push them to an empty array as nested arrays. 

//======================  EXAMPLE  ========================
var arr =[
{name:'mike', age:22},
{name:'robert', age:12},
{name:'roger', age:44},
{name:'peter', age:28},
{name:'Ralph', age:67}
] 
recursive(arr)
[
[ mike, 22],
[ robert, 12],
[ roger, 44],
[ peter, 28],
[ ralph, 67]
]// <======  EXPECTED OUTPUT
//========================================================= 

"========================================================================"
"=============================  EXERCISE 2.5  ==========================="
"========================================================================"

// write a recursive function incByStep which will take several arguments,
// but the first one is a number, second one is a step and a third one is
// a maximum. 

// It should return an array of numbers from the initial number until the 
// maximum number reached with a given step:

// if initial number is 1, step is 3 and maximum is 10 the results should be
// [1, 4, 7] 

// if initial number is 5, step is 10 and maximum is 100 the results should be
// [5, 15, 25, 35, 45, 55, 65, 75, 85, 95]


"========================================================================"
"=============================  EXERCISE 3  ============================="
"========================================================================"

// Write a function called tally to select all the unique elements of an 
// array and count how many times the element has been repeated.
// Then you create an object with 2 elements for each number the first is 
// the number and the second is how many time it was repeated.

//======================  EXAMPLE  ========================
tally([2,3,4,5,5,5,5,5,5,5,6,7,6,7,6,7,5,4,3,4,5,5,6])
// {2: 1, 3: 2, 4: 3, 5: 10, 6: 4, 7: 3}  <======  EXPECTED OUTPUT
tally([10,10,10,4,5])
// {10:3, 4:1, 5:1}  <======  EXPECTED OUTPUT
//========================================================= 


"========================================================================"
"=============================  EXERCISE 4  ============================="
"========================================================================"

// extend tally so that now it can take two arguments, if the second argument 
// is missing it will default to obj, if the second item is anything but arr 
// it will default to obj.
// if the second argument is 'arr' then instead of returning an object with 
// the number as key and how many times it was in the array as values you should 
// return arrays where the first elements is the number and the second is how many 
// times it was in the array.

//======================  EXAMPLE  ========================
tally([2,3,4,5,5,5,5,5,5,5,6,7,6,7,6,7,5,4,3,4,5,5,6])
// {2: 1, 3: 2, 4: 3, 5: 10, 6: 4, 7: 3}  <======  EXPECTED OUTPUT
tally([2,3,4,5,5,5,5,5,5,5,6,7,6,7,6,7,5,4,3,4,5,5,6], 'obj')
// {2: 1, 3: 2, 4: 3, 5: 10, 6: 4, 7: 3}  <======  EXPECTED OUTPUT
tally([2,3,4,5,5,5,5,5,5,5,6,7,6,7,6,7,5,4,3,4,5,5,6], 'arr')
[["2", 1],["3", 2],["4", 3],["5", 10],["6", 4],["7", 3]] // <======  EXPECTED OUTPUT
//========================================================= 


"========================================================================"
"=============================  EXERCISE 5  ============================="
"========================================================================"

// write your own sorting function to sort an array of numbers.
// this function can take up to 2 arguments
// the first is the array that you wish to sort
// the second is the order of sorting
// if the second argument is not passed it should default to 'ascending'
// if the second argument is passed and is 'descending then it should sort 
// the array in descending order'
// if the second argument is passed but is not ascending nor descending it 
// should return an error message alerting the user that he/she passed the wrong data.

// You can't use any built-in methods apart from console.log, alert and document.write
// try splitting this task into smaller inner functions to avoid repetition and a 
// gigantic unreadable if statements.

//======================  EXAMPLE  ========================
sorter([11111,9,10,12,3,321])
// [3, 9, 10, 12, 321, 11111]  <======  EXPECTED OUTPUT
sorter([11111,9,10,12,3,321],'ascending')
// [3, 9, 10, 12, 321, 11111]  <======  EXPECTED OUTPUT
sorter([11111,9,10,12,3,321],'descending')
// [11111, 321, 12, 10, 9, 3]  <======  EXPECTED OUTPUT
sorter([11111,9,10,12,3,321],'whatever')
//========= ⬇️ ⬇️ ⬇️   EXPECTED OUTPUT   ⬇️ ⬇️ ⬇️ ==========
'wrong order provided whatever please provide us with ascending or descending order instructions'
//========================================================= 


"========================================================================"
"=============================  EXERCISE 6  ============================="
"========================================================================"

// Create a server function called Server which allows us to create bank 
// accounts at will, we should be able to add them, deleting them,
// updating them (name and amount), withdraw and deposit, as well as sorting 
// them by name and amount.
// it should also make sure that an account with the same name cannot be added 
// more than once.
// all operation to delete, update, withdraw and deposit should be done using a 
// numeric id which you are in charge to generate and make sure is unique.
// Also make sure that when deleting the ids of remainig accountss are not changing.
// ONLY the Server constructor function should be defined, I will call a new 
// instance if it as below

var server = new Server ()

//=======================  API to follow  ======================================
server.app.post('accounts/new/:name/:amount')
server.app.get('accounts/sort/:by/:order')
server.app.get ('accounts/find')
server.app.get ('accounts/find/:id')
server.app.post('accounts/withdraw/:id/:amount')
server.app.post('accounts/deposit/:id/:amount')
server.app.post('accounts/delete/:id')
server.app.post('accounts/update/:id/:amount/:name')

// for the sorting the expected values are :
// for order : 'asc' and 'desc' which you can hopefully guess what they mean...
// for by    :  'amount' and 'name'

// if the page is not found it should return the following message: '404 page not found'
// if I try adding the same account twice it should return 'Account {ACCOUNT NAME} 
// already present in db'


"========================================================================"
"=============================  EXERCISE 7  ============================="
"========================================================================"

// Create a movie database using real movies data coming from the omdbapi API. 
// You should prompt the title of the movie to the user, then using the fetch
// method get the movie data from the API and finally, if the movie doesn't exist,
// insert it inside the database and return the entire database otherwise return
// a message: Movie ${title} already exists in the database.

// You can use this url to fetch the movies:

`https://omdbapi.com?t=${SOME_TITLE_COMING_FROM_THE_PROMPT}&apikey=thewdb`

// This is the structure of your database :

const database = [
{
  genre: "comedy",
  movies: [{},{}]
},
{
  genre: "thriller",
  movies: [{},{}]
},
{
  genre: "horror",
  movies: [{},{}]
},
]

// Each new movie should have these properties ( even if the API provides you much more ) :

// - Actors
// - Directors
// - Awards
// - Genre
// - Poster
// - Released
// - Title
// - Plot

// If a movie has more than 1 genre, you should add it
// to all of them. 


"========================================================================"
"=============================  EXERCISE 8  ============================="
"========================================================================"

// Create a function called getCurrentWeather that will get your position 
// using the Geolocation API :
// ( https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API )
// Once that you get latitude and longitude of your position, use the fetch
// method to get the current weather from the open-weather-map API :
// https://openweathermap.org/current
// You can either open an account and use your own API key or use this one from
// the school: 16909a97489bed275d13dbdea4e01f59

// The function should print in the console an object with the following structure:

// {
//   name: 'Barcelona', ==> name of the city
//   description: 'clear sky', ==> weather description
//   temp: 32, ==> temperature
//   temp_min: 18, ==> temperature min 
//   temp_max: 35, ==> temperature max
//   wind: 1.7, ==> wind speed
//   humidity: 87 ==> humidity
// }


"========================================================================"
"=============================  EXERCISE 9  ============================="
"========================================================================"

// Extend the previous exercise, adding the forecast weather. To get the 
// data you need to make another request to the open-weather-map API, see the
// details here: 
// https://openweathermap.org/api/one-call-api
 
// The function should now print in the console the same object as the previous exercise but 
// with a new key "forecast" with a value of an array of objects (each object 
// represent the weather of a different day of the week), each object should have 
// the following structure:

// {
//     min: 15, ==> temperature min
//     max: 27, ==> temperature max
//     description: 'heavy intensity rain', ==> weather description
//     wind_speed: 2, ==> wind speed
//     humidity: 78 ==> humidity
// }

"========================================================================"
"=============================  EXERCISE 10  ============================="
"========================================================================"

// Create a euro to dollar (and viceversa) convertor. It needs to take the input from the user and return the converted value.

// Use an external API to get real exchanges rates, you can use this one: https://currencylayer.com/
// (they will ask you to register and will give you a free plan and an api key)

// Use js fetch to get the data from the API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


fetch(`http://www.apilayer.net/api/live?access_key=${your_api_key_here}`)
.then( res => res.json())
.then( response => console.log(response))
.catch( error => console.log(error))

