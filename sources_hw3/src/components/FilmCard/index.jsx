import React from 'react';
import PropTypes from 'prop-types';
import StyledFilmCardButton from 'components/Button/styledComponents/StyledFilmCardButton';
import './styles.css'

const FilmCard = ({film, addToWatchList}) => {

    const _formatFilmOverview = (overview) => {
        if (overview.length > 100) {
            return `${overview.substring(0, 100)}...`;
        } else {
            return overview === "" ? "..." : overview;
        }
    };

    const _handleClick = (event) => {
        event.preventDefault();
        addToWatchList(film);
    };

    return (   <article className="FilmCard">
            <span className="FilmCard__rating">{film.voteRating}</span>
            <img className="FilmCard__poster" src={film.posterPath} alt=""/>
            <h2 className="FilmCard__header">{film.title}</h2>
            <p className="FilmCard__body">{_formatFilmOverview(film.overview)}</p>
            <p className="FilmCard__release">Release date: {film.releaseDate}</p>
            <StyledFilmCardButton className="FilmCard__addToWatchlist"
                             onClick={_handleClick}>+</StyledFilmCardButton>
        </article>
    );

};

FilmCard.propTypes = {
    film: PropTypes.shape({
        posterPath: PropTypes.string,
        voteRating: PropTypes.number,
        overview: PropTypes.string,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.number

    }).isRequired,
    addToWatchList: PropTypes.func.isRequired
};

export default FilmCard;