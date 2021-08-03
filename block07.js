"========================================================================"
"=============================  EXERCISE 1  ============================="
"========================================================================"

// write a function called moviesDB which we use to create a movie database.
// this function should take 3 arguments an array(the actual db), a genre, 
// and an object (the movie), it should check if the genre exists and if it 
// doesn't it should add it on.
// it should also check if the movie exists and add it on if it doesn't.
// see the example of the data structure you MUST follow.
// if the movie is already present it should not add it again and it should 
// instead return the following message:
// 'the movie the < YOUR_MOVIE_GOES_HERE > is already in the database!'

var DB = [
    {
        genre:'thriller', 
        movies: [
            {
                title:'the usual suspects', release_date:1999
            }
        ]
    },
    {
        genre:'comedy', 
        movies: [
            {
                title:'pinapple express', release_date:2008
            }
        ]
    }
]

//======================  EXAMPLE  ========================
moviesDB(DB, 'comedy', {title:'Banana'})
{title:'Banana'} // <======  EXPECTED OUTPUT
moviesDB(DB, 'thriller', {title:'the usual suspects'})
'the movie the usual suspects is already in the database!' // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 2  ============================="
"========================================================================"

// To practice passing data between functions let's create a crypto converter…
// You need to create several functions, each will be responsible for its own 
// tasks and to call the next function.
// addCurrency
// findcurrency
// converter
// tellConversion
// You should exclusively call addCurrency and it will call the others
// add currency takes three arguments 
// a coin, its value (amount of coins) and an array of coins (our coins database)
// the coin should be an object with the following structure:

// {
//      coin:'coin_here', 
//      rate:CONVERSION_RATE_TO_USD_TYPE_NUMBER
// }

//======================  EXAMPLE  ========================
// Here {coin:'bitcoin', rate:8000} is your coin, 2 is a value/amount, crypt is the name of your DB
// First time you run it should return "New coin Bitcoin added to Database"
// Second time you run it the return should be "You will receive 16000 usd for your 2 Bitcoins"

// addCurrency should first check if the coin already exists in the DB and if it doesn't it should 
// add it on and return the following:
// "New coin {YOUR_NEW_ADDED_COIN_GOES_HERE} added to Database"
// If the coin does exist in the DB it should call findcurrency which should retrieve the conversion 
// rate of the given currency and then passing that should call convert 
// which is in charge of doing the actual conversion.
// However it is TellConversion which is in charge to return the final message to the user.
// "You will receive {AMOUNT} usd for your 2 {COINS_NAME}"
// Please make sure that when adding the new currency the output message capitalize the coin name.

var crypt = []
addCurrency({coin:'bitcoin', rate:8000}, 2, crypt)
"New coin Bitcoin added to Database" // <======  EXPECTED OUTPUT
// crypt = [{coin:'bitcoin', rate:8000}]
addCurrency({coin:'bitcoin', rate:8000}, 2, crypt)
"You will receive 16000 usd for your 2 Bitcoins" // <======  EXPECTED OUTPUT
// crypt = [{coin:'bitcoin', rate:8000}]
addCurrency({coin:'eth', rate:800}, 2, crypt)
"New coin Eth added to Database" // <======  EXPECTED OUTPUT
// crypt = [{coin:'bitcoin', rate:8000},{coin:'eth', rate:800}]
//=========================================================


"========================================================================"
"=============================  EXERCISE 3  ============================="
"========================================================================"

// Create a constructor function called bankAccount, which has 3 methods:
// withdraw which takes away from the account balance, 
// deposit which adds to it,
// and balance which returns the balance.
// all of these three are functions, using amount to increase/decrease or display the balance
// all of them are inside your BankAccount class
// the function should work with or without an initial amount.

//======================  EXAMPLE  ========================
var account = new bankAccount(10)
account.withdraw(2)
account.withdraw(5)
account.deposit(4)
account.deposit(1)
account.balance() 
8  // <======  EXPECTED OUTPUT
//=========================================================


"========================================================================"
"=============================  EXERCISE 4  ============================="
"========================================================================"

// Implement a representation of the universe where matter and energy is conserved. 
// To do so implement one object called Universe that contains two objects within: 
// matter and energy. If matter is destroyed; that is say we call Universe.matter.destroy(5), 
// then the amount of energy in the universe needs to be increased so that if we call 
// Universe.energy.total() we should obtain a total value of energy that has increased +5 
// compared to the energy value previous to calling Universe.matter.destroy(5). 
// Of course the total amount of matter obtained by calling Universe.matter.total()has been 
// reduced by 5 compared to the initial value.
//   - Implement this objects using context
//   - The matter and energy objects are defined within an object called Universe
//   - No other variable should be defined out of the Universe object
//   - Also implement the create methods for both matter an energy which are opposite to 
//     their counterparts
//   - You should be able to give an initial amount to either the energy or the matter, 
//     otherwise should default to 0.
    
//======================  EXAMPLE  ========================
var universe = new Universe(10, 'matter')
universe.matter.total // 10 
universe.energy.total // 0 

// or with no initial amount 
var universe = new Universe()
universe.matter.total // 0 
universe.energy.total // 0 
universe.matter.destroy(5) // 0 
universe.matter.total // -5 
universe.energy.total // 5 
universe.energy.destroy(-5) // 0 
universe.matter.total // -10 
universe.energy.total // 10 
universe.energy.create(5) // 0 
universe.matter.total // -15 
universe.energy.total // 15 
//=========================================================

// Notes: Initially make your universe contain 0 matter and energy.  
// Destroying a negative amount of energy of matter is equal to creating 
// a positive amount of each and vice versa for creating matter or energy.


"========================================================================"
"=============================  EXERCISE 5  ============================="
"========================================================================"

// Without Googling how to shuffle elements inside an array in javascript 
// create a function called shuffle and implement in it your own algorithm 
// to shuffle the elements inside of the given array.

//======================  EXAMPLE  ========================
var arr = ['one','two','three','four']
shuffle(arr)
["three", "one", "four", "two"] // <======  EXPECTED OUTPUT
shuffle(arr)
["two", "one", "three", "four"] // <======  EXPECTED OUTPUT
shuffle(arr)
["one", "two", "three", "four"] // <======  EXPECTED OUTPUT
shuffle(arr)
["three", "two", "four", "one"] // <======  EXPECTED OUTPUT
//========================================================= 


"========================================================================"
"===================  EXERCISE 6 - Family affairs  ======================"
"========================================================================"
/*
Jenny from perfectFamily is unhappy and is looking for a new family, help her! 

First, she is looking for a family without a mother so she would fit there easily, 
if such family is not available, then her second choice would be to find a family 
without any kids. If she has some bad luck with that, then her choice would be a 
family with the oldest kid(s) possible. 

Function name is familyAffairs, first argument is a perfect family, second argument 
is an array with other families.
*/

'==> Test case 1 with a family without mother:'

let perfectFamily = {
    father:{ name:'Mike', age:44, height:179 },
    mother:{ name:'Jenny', age:40, height:168 },
    son:{ name:'Pablo', age:16, height:165 }
}

let otherFamilies = [
    {Smiths:{
        father:{ name:'Jake', age:38, height:182 },
        mother:{ name:'Viola', age:36, height:172 },
        son:{ name:'Donny', age:14, height:180 }
        }
    },
    {Morenos:{
        father:{ name:'Juan', age:42, height:188 },
        daughter:{ name:'Julia', age:10, height:149 }
            }
    },
    {Tanakas:{
        father:{ name:'Kioto', age:39, height:172 },
        mother:{ name:'Junko', age:42, height:164 },
        son:{ name:'Bundo', age:24, height:164 }
            }
    }
]

familyAffairs(perfectFamily, otherFamilies)
'Yay! Jenny moved to Morenos' // <======  EXPECTED OUTPUT


'==> Test case 2 with all families with mothers but one without kids:'

let perfectFamily = {
    father:{ name:'Mike', age:44, height:179 },
    mother:{ name:'Jenny', age:40, height:168 },
    son:{ name:'Pablo', age:16, height:165 }
}

let otherFamilies = [
    {Smiths:{
        father:{ name:'Jake', age:38, height:182 },
        mother:{ name:'Viola', age:36, height:172 }
        }
    },
    {Morenos:{
        father:{ name:'Juan', age:42, height:188 },
        daughter:{ name:'Julia', age:10, height:149 },
        mother:{ name:'Kate', age:36, height:172 }
            }
    },
    {Tanakas:{
        father:{ name:'Kioto', age:39, height:172 },
        mother:{ name:'Junko', age:42, height:164 },
        son:{ name:'Bundo', age:24, height:164 }
            }
    }
]

familyAffairs(perfectFamily, otherFamilies)
'Yay! Jenny moved to Smiths'// <======  EXPECTED OUTPUT


'==> Test case 3 with all families with mothers and kids:'

let perfectFamily = {
    father:{ name:'Mike', age:44, height:179 },
    mother:{ name:'Jenny', age:40, height:168 },
    son:{ name:'Pablo', age:16, height:165 }
}

let otherFamilies = [
    {Smiths:{
        father:{ name:'Jake', age:38, height:182 },
        mother:{ name:'Viola', age:36, height:172 },
        son:{ name:'Donny', age:14, height:180 }
        }
    },
    {Morenos:{
        father:{ name:'Juan', age:42, height:188 },
        daughter:{ name:'Julia', age:10, height:149 },
        mother:{ name:'Kate', age:36, height:172 }
            }
    },
    {Tanakas:{
        father:{ name:'Kioto', age:39, height:172 },
        mother:{ name:'Junko', age:42, height:164 },
        son:{ name:'Bundo', age:24, height:164 }
            }
    }
]

familyAffairs(perfectFamily, otherFamilies)
'Yay! Jenny moved to Tanakas' // <======  EXPECTED OUTPUT


"========================================================================"
"===================  EXERCISE 7 - Humans invasion  ====================="
"========================================================================"

// No tests for this one since it will be using a random choice for the battle 🤪

/*
As we run out or resources on Earth we are planning an invasion on planet Otatop 
which seems to have very suitable atmosphere for us. But there is a tiny problem -- it 
is already inhibitit by some local creatures. And they are willing to protect it 
from us (how dare they!).
So we assemled an army of stormtroopers willing to defeat and conquer. 
First battle is happening on Otatop, if we defeat them there -- war is over!!!
If not, next battle is one step closer to Earth, on the SuperNova13! From there, if those annoying aliens 
will defeat us, the battle is moving to Z666, and so on. If we win a battle we are moving to the next battle in the opposite direction toward Otapop.
Losing on Earth means end of game for us. 
So the race losing the battle on their home planet lose the game and seize to exist. 
Alternatively, the army first to perish completely also means kaput for the player 
and end game. If unit is perished completely, it can't go to the next battle, duh.

For every battle for simplicty we randomly pick units from both armies and throw them 
into the fight, the unit winning determines the results fo the battle, also based on 
the damage caused we count how many opposite units are dead. 
*/ 

// Example data:

let locations = ['Earth','Moon','Z666','SuperNova13','Otatop']
let humans = [
{unit:'karateMasters', qty: 3000, strength: 5, rateOfFire: 20, stamina: 10},
{unit:'teslaTanks', qty: 50, strength: 100, rateOfFire: 5, stamina: 100},
{unit:'bostonDynamicsSpot', qty: 200, strength: 50, rateOfFire: 15, stamina: 60}
]
let aliens = [
{unit:'motherLord', qty: 1, strength: 500, rateOfFire: 50, stamina: 300},
{unit:'yellowCreature', qty: 250, strength: 200, rateOfFire: 6, stamina: 90},
{unit:'slimyThing', qty: 2500000, strength: 3, rateOfFire: 30, stamina: 7}
]

/* Example of calculating damage/loss:

If we have
 {unit:'karateMasters',qty: 3000, strength: 10, rateOfFire: 1, stamina: 2} going into battle the damage would be 3000 * 10 * 1 = 30 000 

And form another army we have
{unit:'slimyThing', qty: 2500, strength: 12, rateOfFire: 20, stamina: 100} their damage would be 2500 * 12 * 20 = 600 000 

karateMaster stamina is 2, so slimyThing dealing damage of 600 000 would kill 600 000 / 2  = 300 000, 
karateMasters they will perish completely in this battle bringing their qty to -297 000 and can’t go to the next battle

Damage of 30 000 from karateMasters will kill 30 000 / 100 = 300 slimyThings bringing their qty down to 2200 so they suffered damage but still can go to the next battle in a qty of 2200

"========================================================================"
"===================  EXERCISE 8 - Managing store  ======================"
"========================================================================"

// You have been hired by an ecommerce startup and your job is to prepare the core code 
// to add categories and products, rename the catergories without affecting the products
// and display every product inside every category. 

// Declare these 2 variables with the following sample content, in the categories we will have objects for every category with it's name and id. If we will rename a category the id should stay the same.

// In the products array we have objects for every product and each product has a name, it's id and id of category from the categories array. 

let categories = [
    {id: 1, catName: 'shoes'},
    {id: 2, catName: 'hats'}
];
let products = [
    {name:'black shoes', catID:1},
    {name:'black hat', catID:2}
    ];

//======================  EXAMPLE  ========================
addNewProduct('yellow hat', 'hats')
`Product yellow hat was added under hats category!` // <======  EXPECTED OUTPUT
addNewProduct('yellow hat', 'hats')
`Product is already there.` // <======  EXPECTED OUTPUT
addNewProduct('blue jeans', 'pants')
`New category pants was created and product blue jeans was added succesfully.` // <======  EXPECTED OUTPUT
renameCat('pants', 'jeans')
categories = [...] // <======  EXPECTED OUTPUT
renameCat('shirts', 'streetwear')
`Category shirts doesn't exist.`
displayAll('shoes')
`Category shoes contains black shoes.` // <======  EXPECTED OUTPUT
displayAll()
`Category shoes contains black shoes. Category headwear contains black hat, yellow hat. Category pants contains blue jeans.`
//========================================================= 

