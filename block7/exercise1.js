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

var minariTitle = { title: "Minari" };

const moviesDB = (array, genre, movieObj) => {
  // Declare a function called 'moviesDB' which takes 3 arguments: an array(DB), a genre and a movie.
  console.log(DB[0].genre === "thriller"); // Check the genre in the array
  var index = array.findIndex((movie) => movie.genre === genre);
  if (index === -1) {
    //if genre is not given in the array
    // Push the an object with the genre and an array called movies which contain the movie(argument).
    console.log(minariTitle.title);
    array.push({ genre: genre, movies: [{ title: movieObj.title }] });
    return array;
  }
  var index2 = array[index].movies.findIndex(
    (ele) => ele.title === movieObj.title
  );
  if (index2 === -1) {
    array[index].movies.push(movieObj);
  } else {
    return `the movie ${movieObj.title} is already in the database!`;
  }
  return array;

  // If it is present:
  // At the index of the genre, Use Array.prototype.findIndex to check if the movie is there:
  console.log(DB[0].movies[0].title);
};

moviesDB;
// console.log(moviesDB(DB, "thriller", obj2));
module.exports = {
  moviesDB,
};

// If is not there:

// push it in at that index.

// If is there already:

// return the movie ${THE TITLE OF THE MOVIE} is already in the database!`

// at the end return DB.
