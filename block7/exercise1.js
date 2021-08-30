var DB = [
  {
    genre: "thriller",
    movies: [
      {
        title: "the usual suspects",
        release_date: 1999,
      },
    ],
  },
  {
    genre: "comedy",
    movies: [
      {
        title: "pinapple express",
        release_date: 2008,
      },
    ],
  },
];

var obj2 = { title: "the usual suspects" };

// console.log(DB);

const moviesDB = (arr, str, obj) => {
  arr.forEach(function (array) {
    console.log(array);
    if (array.genre == str) {
      console.log(array.genre);
      if (array.movies) {
        console.log(array.movies);
        array.movies.forEach(function (ele) {
          console.log(ele);
          if (ele.title == obj.title) {
            console.log(
              "the movie the usual suspects is already in the database"
            );
          } else {
            console.log(obj);
          }
        });
      }
    }
  });
};

moviesDB(DB);
module.exports = {
  moviesDB,
};
