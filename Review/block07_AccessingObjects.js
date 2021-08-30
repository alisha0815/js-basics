// Accessing nested Objects

var main = {
  males: {
    anto: {
      name: "antonello",
      lastname: "sanna",
    },
    miky: {
      name: "mike",
      lastname: "peterson",
    },
  },

  females: {
    guenda: {
      name: "guendalina",
      lastname: "juarez",
    },
    jenny: {
      name: "jennifer",
      lastname: "parker",
    },
  },
};

console.log(main);

const checkObj = (main) => {
  if (main.males) {
    console.log(main.males);
    for (var key in main.males) {
      console.log(main.males[key].name, main.males[key].lastname);
    }
  }
  if (main.females) {
    console.log(main.females);
    for (var key in main.females) {
      console.log(main.females[key].name, main.females[key].lastname);
    }
  }
};
