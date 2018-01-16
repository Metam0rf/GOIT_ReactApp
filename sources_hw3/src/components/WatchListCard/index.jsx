import React from 'react';
import StyledFilmCardButton from 'components/Button/styledComponents/StyledFilmCardButton';
import PropTypes from 'prop-types';
import './styles.css';


const WatchListCard = ({film, onDetachFilmFromWatchList}) => {

    const _handleClick = (event) => {
        event.preventDefault();
        onDetachFilmFromWatchList(film);
    };

    return (
        <section className="WatchListCard">
            <img className="WatchListCard__poster" src={film.posterPath} alt={film.title}/>
            <div className="WatchListCard__body">
                <h3 className="WatchListCard__title">
                    {film.title}
                </h3>
                <p className="WatchListCard__release">
                    Released: {film.releaseDate}
                </p>
                <p className="WatchListCard__rating">
                    Rating: {film.voteRating}
                </p>
                <StyledFilmCardButton className="WatchListCard__btn"
                                 onClick={_handleClick.bind(this)}>-</StyledFilmCardButton>
            </div>
        </section>
    );
};

WatchListCard.propTypes = {
    film: PropTypes.shape({
        posterPath: PropTypes.string,
        voteRating: PropTypes.number,
        overview: PropTypes.string,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.number

    }).isRequired,
    onDetachFilmFromWatchList: PropTypes.func.isRequired
};

export default WatchListCard;