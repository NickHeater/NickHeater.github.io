async function showMovies() {
    let response = await fetch('https://portiaportia.github.io/csce242/json/movies.json');
    let moviesJSON = await response.json();
    let movieDiv = document.getElementById("movies-section");
    
    //loops through list of movies in the JSON file
    for(i in moviesJSON) {
        let movie = moviesJSON[i];
        movieDiv.append(getMovieItem(movie));
    }
}

function getMovieItem(movie){
    let movieSection = document.createElement("section");
    movieSection.className = "movie";

    let imgElem = document.createElement("img");
    imgElem.src = `https://portiaportia.github.io/csce242/json/${movie.img}`;
    movieSection.append(imgElem);
    imgElem.width = "225";
    imgElem.height = "225";
    imgElem.className = "pic";
    imgElem.classList.add("zoom");

    let titleELem = document.createElement("h3");
    titleELem.innerText = movie.title;
    movieSection.append(titleELem);

    let directorELem = document.createElement("p");
    directorELem.innerText = `Director: ${movie.director}`;
    movieSection.append(directorELem);

    let actorsELem = document.createElement("p");
    actorsELem.innerText = `Actors: ${movie.actors}`;
    movieSection.append(actorsELem);

    let yearELem = document.createElement("p");
    yearELem.innerText = `Year: ${movie.year}`;
    movieSection.append(yearELem);

    let genresELem = document.createElement("p");
    genresELem.innerText = `Genres: ${movie.genres}`;
    movieSection.append(genresELem);

    let descriptionELem = document.createElement("p");
    descriptionELem.innerText = `${movie.description}`;
    movieSection.append(descriptionELem);

    return movieSection;
}

window.onload = function() {
    this.showMovies();
}