// deel 3 alle films loggen naar de console
// movies.forEach( movie => console.log(movie.Title));
// showTitles();

// deel 4.1 alle films in de DOM
// deze ga ik overal nodig hebben
const moviesList = document.querySelector("#movies-ul");

const createMovieItemAnchor = (item) => {
  return (
    "<a target='blank' href='https://www.imdb.com/title/" +
    item.imdbID +
    "'/>" +
    "<img class='movie-poster' alt='movie poster' src=" +
    item.Poster +
    "></a>"
  );
};

// hier moet een array in
function addMoviesToDom(listOfMovies) {

    // eerst alles weghalen
  let currentMovieList = document
    .querySelector("#movies-ul")
    .getElementsByTagName("img");
   Array.from(currentMovieList).forEach(function (li) {li.remove();
//   [...currentMovieList].forEach(function (li) {li.remove();
   });

  // voor iedere movie die binnengekomen is een li en een a maken en netjes aan de dom toevoegen
  listOfMovies.forEach( function (movie) {
    const newLi = document.createElement("li");
    newLi.classList.add('movie-li');
    newLi.innerHTML = createMovieItemAnchor(movie);
    moviesList.append(newLi);
  })
}

// bij het eerste laden van de pagina halen we alle movies op
addMoviesToDom(movies);

// const addLatestMoviesToDom = function() {
//   let filteredMovies = movies.filter(function (movie) {
//     return movie.Year > 2014;
//   });
//   addMoviesToDom(filteredMovies);
// };

const addLatestMoviesToDom = () => addMoviesToDom(movies.filter((movie) => movie.Year > 2014));

// const addFilteredMoviesToDom = function (wordInMovieTitle) {
//     // let filteredMovies = movies.filter( function (movie) {
//     //     return movie.Title.includes(wordInMovieTitle);
//     // });
//     // addMoviesToDom(filteredMovies);
//     addMoviesToDom( movies.filter( movie => movie.Title.includes(wordInMovieTitle)));
// }

const addFilteredMoviesToDom = wordInMovieTitle => 
    addMoviesToDom(movies.filter((movie) =>
      movie.Title.includes(wordInMovieTitle))
  );


function handleOnChangeEvent (e) {
  switch (e.target.value) {
    case "2014":
      addLatestMoviesToDom();
      break;
    case "avengers":
      addFilteredMoviesToDom("Avengers");
      break;
    case "x-men":
      addFilteredMoviesToDom("X-Men");
      break;
    case "princess":
      addFilteredMoviesToDom("Princess");
      break;
    case "batman":
      addFilteredMoviesToDom("Batman");
      break;
  }
};

const addRadioButtons = document.querySelectorAll("[name='film-selector']")
                        .forEach( button => addEventListener("change", handleOnChangeEvent));

addRadioButtons;                        