import React from 'react';
import PropTypes from 'prop-types';
import {getFilmsData} from 'filmsAPIController';
import "./styls.css";

const SearchForm = ({updateFilms}) => {



    let textInputToSearching = null;

    const _handleSubmit = (event) => {
        const searchedText = textInputToSearching.value.trim();
        if (searchedText === "") {
            alert("Запоните поле поиска фильмов!");
            return;
        }
        const url = `${process.env.REACT_APP_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}${process.env.REACT_APP_DEFAULT_LANGUAGE}&query=${searchedText.replace(/ /g, "+")}`;
        updateFilms(url);
        textInputToSearching.value= "";
    };

    return (
        <form className="SearchForm" action="#" onSubmit={_handleSubmit}>
            <input ref={(input) => textInputToSearching = input} type="text"
                   placeholder="Search for movies by name..."/>
        </form>
    );
};

SearchForm.propTypes = {
    updateFilms: PropTypes.func.isRequired
};

SearchForm.displayName = "SearchForm";

export default SearchForm;