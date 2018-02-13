import React from 'react';
import WatchListCard from 'components/WatchListCard';
import PropTypes from 'prop-types';
import './styles.css';

const WatchList = ({films, onDetachFilmFromWatchList}) => {

    const renderWatchListCards = () => {
        return films.map(film => (
           <WatchListCard key={film.id} film={film} onDetachFilmFromWatchList={onDetachFilmFromWatchList}/>
        ));
    };

    return (
      <div className="WatchList">
          <h2 className="WatchList__title">watchlist</h2>
          {renderWatchListCards()}
      </div>
    );
};

WatchList.propTypes = {
    films: PropTypes.array.isRequired,
    onDetachFilmFromWatchList: PropTypes.func.isRequired
};

export default WatchList;