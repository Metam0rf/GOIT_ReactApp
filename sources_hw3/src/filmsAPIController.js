export const getFilmsData = (URL_REQUEST) => {

    const getPosterPath = (path) => path !== null ? `${process.env.REACT_APP_POSTERS_URL}${path}` : "";
    const getReleaseDate = (date) => new Date(date).getFullYear();

    return fetch(URL_REQUEST, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            // throw new Error("Error fetching films data");
        })
        .then((data) => {
            return data.results.map(film => ({
                id: film.id,
                posterPath: getPosterPath(film.poster_path),
                title: film.title,
                overview: film.overview,
                releaseDate: getReleaseDate(film.release_date),
                voteRating: film.vote_average,
            }));
        })
        .catch(error => {
            console.log(error);
            return [];
        });
};

