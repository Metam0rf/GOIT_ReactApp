import React from 'react';
import SearchForm from 'components/SearchForm';
import SearchCategories from "components/SearchCategories";
import WatchList from "components/WatchList";
import PropTypes from 'prop-types';
import './styles.css';

const SideBar = ({updateFilms, filmsInWatchList, onDetachFilmFromWatchList}) => {



    return (
        <nav className="SideBar">
            <SearchForm updateFilms={updateFilms}/>
            <div className="SideBar__categories-wrapper">
                <SearchCategories updateFilms={updateFilms}>
                    <button queryparam="popular">popular</button>
                    <button queryparam="top_rated">top rated</button>
                    <button queryparam="upcoming">upcoming</button>
                </SearchCategories>
            </div>
            <WatchList films={filmsInWatchList} onDetachFilmFromWatchList={onDetachFilmFromWatchList} />
        </nav>
    );

};

SideBar.displayName = "SideBar";

SideBar.propTypes = {
    updateFilms: PropTypes.func.isRequired,
    filmsInWatchList: PropTypes.array.isRequired,
    onDetachFilmFromWatchList: PropTypes.func.isRequired
};

export default SideBar;