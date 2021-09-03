// Create a constructor function called 'Universe' which takes two arguments
// an initial value and the destination object (matter or energy).

class Universe {
  constructor(value, destination) {
    var self = this;
    this.matter = {
      total: destination == "matter" ? value : 0,
      destroy: function (value) {
        // { total: 0, destroy: [Function: destroy], create: [Function: create] }

        this.total -= value; //matter.total
        self.energy.total += value;
        // energy.total
      },
      create: function (value) {
        // return this.total + value;
        this.total += value; //matter.total
        self.energy.total -= value;
      },
    };
    this.energy = {
      total: destination == "energy" ? value : 0,
      destroy: function (value) {
        this.total -= value;
        self.matter.total += value;
      },
      create: function (value) {
        this.total += value;
        self.matter.total -= value;
      },
    };
  }
}

module.exports = {
  Universe,
};

// == HINT ===
// You could assign this to a variable to access it where is not available.

// == STEPS ===

// Create a method called 'create' which takes one argument, a value, and adds it to the 'total' of 'matter' and subtracts it from the 'total' of 'energy'

// Using the keyword "this" create an object called 'energy':

// in it give it a property 'total' and give it a value of or either the initial value passed as argument or 0, depending on weather the destination object was 'matter' or 'energy'.

// Create a method called 'destroy' which takes one argument, a value, and subtract it form the 'total' of 'energy' and adds it on the 'total' of 'matter'.

// Create a method called 'create' which takes one argument, a value, and adds it to the 'total' of 'energy' and subtracts it from the 'total' of 'matter'
