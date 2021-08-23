function addToList(arrMovie) {
  let moviesDB = [];

  arrMovie.forEach((movie) => {
    let movieObj = {};

    movieObj["title"] = movie;
    movieObj["id"] = arrMovie.indexOf(movie);
    moviesDB.push(movieObj);
  });
  return moviesDB;
}
module.exports = {
  addToList,
};

// define a function called 'addToList' which takes an array as argument.
// inside it define a variable called 'moviesDB' as an empty array.
// loop inside the array (argument) and each time the loop runs create a new object
// assign it a key of "title" and the value of the array element,
// assign it a key of "id" and get the value from the loop current index.
// push the object to the 'moviesDB' array.
// outside the loop return 'moviesDB'.
