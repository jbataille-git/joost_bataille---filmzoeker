// document.createTextNode: nette manier om tekst toe te voegen in/aan DOM-element

// drie manieren om over de array te lopen
// plus een extra manier om het op te schrijven
const showTitles = function () {
    movies.forEach( function(movie) {
        console.log(movie.Title);
    })
// of
// movies.forEach( movie => console.log(movie.Title));
// of
//    let lengte = movies.length;
//    console.log("lengte: ", lengte);
//     for (i=0; i < lengte; i++) {
//         console.log(movies[i].Title);
//     }
// of
//    for (let movie of movies) console.log(movie.Title);
};

// deel 3 alle films loggen naar de console
// showTitles();

// deel 4.1 alle films in de DOM
// deze ga ik overal nodig hebben
const moviesList = document.querySelector("#movies-ul");
// ----------------------------------------------------------------------------
// dit werkt maar is niet volgens de opdracht
// const addMovieToDom = function (item) {
//     newLi = document.createElement("li");
//     newLi.innerHTML = item.Title;
//     moviesList.appendChild(newLi);
// };
//
// function addMovieToDom(movie) {
//     newLi = document.createElement("li");
//     newLi.innerHTML = movie.Title;
//     moviesList.appendChild(newLi);
// };
//
// movies.forEach(addMovieToDom);
// ----------------------------------------------------------------------------
const createMovieItem1 = (item) => "<li>" + item.Title + "</li>";

const createMovieItem2 = (item) => "<img class='movie-poster' alt='movie poster' src=" + item.Poster + ">";

const createMovieItem3 = (item) => {
  return (
    "<div class='movie-li'>" +
    "<a target='blank' href='https://www.imdb.com/title/" +
    item.imdbID +
    "'/>" +
    "<img class='movie-poster' alt='movie poster' src=" +
    item.Poster +
    "></a></div>"
  );
};

function addMoviesToDom(listOfMovies) {
  let movieListItems = listOfMovies.map((item) => {
//      return createMovieItem1(item);
//      return createMovieItem2(item);
      return createMovieItem3(item);
  })

  // moviesList.innerHTML = "";
  // of netter
  let currentMovieList = document.querySelector("#movies-ul").getElementsByTagName("img");
  Array.from(currentMovieList).forEach( function (li) {
    li.remove();
  });
  movieListItems.forEach( function(item) { moviesList.innerHTML += item});
}

// bij het eerste laden van de pagina halen we alle movies op
addMoviesToDom(movies);

function filterMovies (wordInMovieTitle) {
    return filteredMovies = movies.filter( function (movie) {
        return movie.Title.includes(wordInMovieTitle);
    });
};

function filterLatestMovies () {
    return (filteredMovies = movies.filter(function (movie) {
      return movie.Year > 2014;
    }));
}

function handleOnChangeEvent (e) {
  switch (e.target.value) {
    case "2014":
      addMoviesToDom(filterLatestMovies());
      break;
    case "avengers":
      addMoviesToDom(filterMovies("Avengers"));
      break;
    case "x-men":
      addMoviesToDom(filterMovies("X-Men"));
      break;
    case "princess":
      addMoviesToDom(filterMovies("Princess"));
      break;
    case "batman":
      addMoviesToDom(filterMovies("Batman"));
      break;
  }
};
// in de switches hierboven zou je kunnen zeggen
// filterAndAddToDom en in die functie filter je eerst het array en doe je een forEach naar addMovieToDom
// en dat is een functie die één film afhandelt in plaats van een array
// dat zou een andere manier zijn

// let radioButtons = document.querySelectorAll("#radios-fieldset input");
// const radioButtons = document.querySelectorAll("[name="film-selector"]");
// radioButtons.forEach( button => addEventListener("change", handleOnChangeEvent));
const addRadioButtons = document.querySelectorAll("[name='film-selector']")
                        .forEach( button => addEventListener("change", handleOnChangeEvent));

addRadioButtons;                        